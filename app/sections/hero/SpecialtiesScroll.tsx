import ServicesData from '@/app/data/ServicesData'
import React from 'react'

const SpecialtiesScroll = () => {
  return (
    <div
    className="w-[75vw] md:w-[50vw] text-custom-dark-light dark:text-custom-white-dark/60 inline-flex
    flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]
    text-base lg:text-lg"
  >
    <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll">
      {ServicesData?.sort((a, b) => a.order - b.order).map((data) => (
        <li
          key={data.id}
          className=" w-fit max-w-none whitespace-nowrap"
        >
          {data.name} &emsp; ✗ &emsp;
        </li>
      ))}
      {ServicesData?.sort((a, b) => a.order - b.order).map((data) => (
        <li
          key={data.id}
          className=" w-fit max-w-none whitespace-nowrap"
        >
          {data.name} &emsp; ✗ &emsp;
        </li>
      ))}
    </ul>
    <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll">
      {ServicesData?.sort((a, b) => a.order - b.order).map((data) => (
        <li
          key={data.id}
          className=" w-fit max-w-none whitespace-nowrap"
        >
          {data.name} &emsp; ✗ &emsp;
        </li>
      ))}
      {ServicesData?.sort((a, b) => a.order - b.order).map((data) => (
        <li
          key={data.id}
          className=" w-fit max-w-none whitespace-nowrap"
        >
          {data.name} &emsp; ✗ &emsp;
        </li>
      ))}
    </ul>
  </div>
  )
}

export default SpecialtiesScroll