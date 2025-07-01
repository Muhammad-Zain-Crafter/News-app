import React from 'react'

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-xs h-[485px] bg-black border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
        <a href="#">
           <img className="rounded-t-lg h-200px" style={{ height: "175px", width: "320px" }} src={src} alt="" />
        </a>
        <div className="p-5 flex flex-col justify-between flex-1">
          <div>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">
              {title?.slice(0, 100)} 
            </h5>
            <p className="mb-3 text-sm font-normal text-white">
              {description?.slice(0, 180)}
            </p>
          </div>
          <a
            href={url}
            className="mt-auto w-24 inline-flex text-sm items-center px-2 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
