import React from "react";

type Props = {
  text: string;
  color: string;
  colorDark: string;
};

const TextInfiniteScroll = (props: Props) => {
  return (
    <div
      className={`w-full mt-3 md:mt-6 inline-flex  items-center justify-center max-w-[90vw] 
    flex-nowrap overflow-hidden lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_300px,_black_calc(100%-300px),transparent_100%)] 
    [mask-image:_linear-gradient(to_right,transparent_0,_black_60px,_black_calc(100%-60px),transparent_100%)] text-base lg:text-lg`}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <ul
          key={index}
          className="flex items-center justify-center md:justify-start animate-infinite-scroll-slow"
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <li
              key={index}
              className="w-fit max-w-none whitespace-nowrap  text-4xl md:text-5xl lg:text-7xl font-bold py-6 flex items-center"
            >
              {props.text} &nbsp;{" "}
              <span
                className={`text-xl md:text-2xl lg:text-3xl ${props.color} ${props.colorDark}`}
              >
                ✗
              </span>{" "}
              &nbsp; &nbsp;
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default TextInfiniteScroll;
