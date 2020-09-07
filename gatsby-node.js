const fs = require("fs")
const robotsTxt = require("generate-robotstxt")
const url = require("url")

const path = require("path")
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const posts = result.data.allMarkdownRemark.edges
  posts.forEach(({ node }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/BlogPostTemplate.tsx`),
      context: {
        next,
        previous,
        slug: node.frontmatter.slug,
      },
    })
  })
}
// robots txt

const publicPath = "./public"
const defaultEnv = "development"
const defaultOptions = {
  output: "/robots.txt",
  query: `{
    site {
      siteMetadata {
        siteUrl
      }
    }
  }`,
}

function writeFile(file, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

function runQuery(handler, query) {
  return handler(query).then(res => {
    if (res.errors) {
      throw new Error(res.errors.join(", "))
    }

    return res.data
  })
}

const getOptions = pluginOptions => {
  const options = { ...pluginOptions }

  delete options.plugins

  const {
    env = {},
    resolveEnv = () => process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV,
  } = options

  const envOptions = env[resolveEnv()] || env[defaultEnv] || {}

  delete options.env
  delete options.resolveEnv

  return { ...options, ...envOptions }
}

exports.onPostBuild = async ({ graphql }, pluginOptions) => {
  const userOptions = getOptions(pluginOptions)
  const mergedOptions = { ...defaultOptions, ...userOptions }

  if (
    !Object.prototype.hasOwnProperty.call(mergedOptions, "host") ||
    !Object.prototype.hasOwnProperty.call(mergedOptions, "sitemap")
  ) {
    const {
      site: {
        siteMetadata: { siteUrl },
      },
    } = await runQuery(graphql, mergedOptions.query)

    mergedOptions.host = siteUrl
    mergedOptions.sitemap = url.resolve(siteUrl, "sitemap.xml")
  }

  const { policy, sitemap, host, output, configFile } = mergedOptions

  const content = await robotsTxt({
    policy,
    sitemap,
    host,
    configFile,
  })
  const filename = path.join(publicPath, output)

  return await writeFile(path.resolve(filename), content)
}
