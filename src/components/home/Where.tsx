import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
// import { FaMapLocationDot } from "react-icons/fa6";

export default function Where() {
  return (
    <div className="pb-28">
      <div className="pb-2 sm:pb-5 pt-48 sm:pt-64 flex gap-x-2 items-center">
        <h1 className="font-medium text-base">Where</h1>
        {/* <FaMapLocationDot className="text-lg text-gray-500" /> */}
      </div>
      <div className="relative w-full h-full">
        <Image
          src={"/geo-dark.png"}
          // width={330}
          // height={325}
          width={560}
          height={325}
          layout="responsive"
          objectFit="cover"
          alt="Pakistan"
          className="rounded-lg sm:w-[560px] sm:h-[325px]"
        />

        {/* Group this both */}
        {/* This work great small screen but break for large screen */}
        <div className="absolute top-[28%] right-[24%] sm:top-24 sm:right-32">
          <div className="flex justify-center items-center">
            <div className="w-14 h-14 bg-blue-500 rounded-full animate-ping opacity-85 duration-7000 delay-15000"></div>
            <div className="absolute w-4 sm:w-6 h-4 sm:h-6 bg-blue-500 rounded-full border-2 sm:border-4 border-white"></div>
          </div>
        </div>
      </div>

      <Link
        href={"https://en.wikipedia.org/wiki/Lahore"}
        className="flex items-center gap-x-1 justify-end py-2 text-neutral-500 cursor-pointer underline text-sm"
      >
        <FaLocationDot className="text-sm" />
        <h1>Lahore, Pakistan</h1>
      </Link>
    </div>
  );
}
