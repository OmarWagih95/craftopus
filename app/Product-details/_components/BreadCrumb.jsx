import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function BreadCrumb({path,categorName,productName}) {
  const router=useRouter()
    console.log(path?.split("/")[1])
  return (


<nav aria-label="Breadcrumb" className="flex mt-14">
  <ol
    className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-700 dark:border-gray-700 dark:text-gray-200"
  >
    <li className="flex items-center">
      <Link
        href="/"
        className="flex h-5 lg:h-10 items-center gap-1.5 bg-gray-100 px-1  lg:px-4 transition hover:text-gray-900 dark:bg-gray-900 dark:hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>

        <span className="text-[10px] lg:text-sm font-medium"> Home </span>
      </Link>
    </li>

    <li className="relative flex items-center">
      <span
        className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180 dark:bg-gray-900"
      >
      </span>

      <Link
        href="/#ourCategories"
        className="flex h-10 items-center text-[10px] text-[10px] bg-white pe-4 ps-8 lg:text-xs font-medium transition hover:text-gray-900 dark:bg-gray-800 dark:hover:text-white  "
      >
        Categories
      </Link>
    </li>
    <li className="relative flex items-center">
      <span
        className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180 dark:bg-gray-800"
      >
      </span>

      <Link
        onClick={router.back}   
        href={''}
             className="truncate flex h-10 items-center bg-white pe-4 ps-8 text-[10px] lg:text-xs font-medium transition hover:text-gray-900 dark:bg-gray-900 dark:hover:text-white"
      >
        {categorName}
      </Link>
    </li>
    <li className="relative flex items-center">
      <span
        className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180 dark:bg-gray-900"
      >
      </span>

      <Link
        href="#"
        className="flex h-10 items-center bg-white pe-4 ps-8 text-[10px] lg:text-xs font-medium transition hover:text-gray-900 dark:bg-gray-800 dark:hover:text-white"
      >
        {productName}
      </Link>
    </li>
  </ol>
</nav>
  )
}

export default BreadCrumb