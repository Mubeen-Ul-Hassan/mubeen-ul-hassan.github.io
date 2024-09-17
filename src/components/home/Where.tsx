import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";

export default function Where() {
  return (
    <div className="pb-28">
      <div className="pb-5 pt-64 flex gap-x-2 items-center">
        <h1 className="font-medium text-base">Where</h1>
        <FaMapLocationDot className="text-lg text-gray-500" />
      </div>
      <div className="relative">
        <Image
          src={"/geo-dark.png"}
          width={560}
          height={325}
          alt="Pakistan"
          className="rounded-lg"
        />

        <div className="w-14 h-14 bg-blue-500 rounded-full absolute top-[110px] left-[340px] animate-ping opacity-85 duration-7000 delay-15000"></div>
        <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white absolute top-[130px] left-[360px]"></div>
      </div>

      <Link
        href={"https://en.wikipedia.org/wiki/Lahore"}
        className="flex items-center gap-x-1 justify-end py-2 text-gray-500 cursor-pointer underline text-sm"
      >
        <FaLocationDot className="text-sm" />
        <h1>Lahore, Pakistan</h1>
      </Link>
    </div>
  );
}
