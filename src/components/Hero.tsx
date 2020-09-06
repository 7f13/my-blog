import React from "react"
interface Props {
  title: string
  reverse?: boolean
  children: React.ReactNode
}
export const Hero: React.FC<Props> = ({ title, reverse, children }) => {
  if (reverse)
    return (
      <div className="flex flex-col-reverse sm:flex-row justify-evenly items-center my-12">
        {children}
        <h2 className="text-4xl  sm:mb-6 text-center">{title}</h2>
      </div>
    )
  else
    return (
      <div className="flex flex-col sm:flex-row justify-evenly items-center my-12">
        <h2 className="text-4xl  sm:mb-6 text-center">{title}</h2>
        {children}
      </div>
    )
}
