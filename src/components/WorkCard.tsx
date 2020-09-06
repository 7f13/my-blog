import React from "react"
interface Props {
  title: string
  subtitle: string
  reverse?: boolean
  body: string
  children: React.ReactNode
}
export const WorkCard: React.FC<Props> = ({
  title,
  subtitle,
  reverse,
  body,
  children, //画像
}) => {
  if (reverse)
    return (
      <div
        className="flex flex-col-reverse mb-6 hover:shadow-xl py-5 rounded hover:scale-105 transition duration-500 ease-in-out transform sm:flex-row sm:justify-evenly
        items-center"
      >
        {children}
        <div className="flex flex-col justify-between w-4/5 mb-4 sm:w-5/12">
          <div>
            <h3 className="mb-2 text-lg font-bold">{title}</h3>
            <div className="h-2 w-20 rounded-full bg-teal-300 mb-4" />
          </div>
          <div>
            <p className="mb-1 font-bold">{subtitle}</p>
            <p className="mb-4 text-gray-800 text-sm tracking-tight">{body}</p>
          </div>
        </div>
      </div>
    )
  else
    return (
      <div
        className="flex flex-col mb-6 hover:shadow-xl py-5 rounded hover:scale-105 transition duration-500 ease-in-out transform sm:flex-row sm:justify-evenly
          items-center"
      >
        <div className="flex flex-col justify-between w-4/5 mb-4 sm:w-5/12">
          <div>
            <h3 className="mb-2 text-lg font-bold">{title}</h3>
            <div className="h-2 w-20 rounded-full bg-teal-300 mb-4" />
          </div>
          <div>
            <p className="mb-1 font-bold">{subtitle}</p>
            <p className="mb-4 text-gray-800 text-sm tracking-tight">{body}</p>
          </div>
        </div>
        {children}
      </div>
    )
}
