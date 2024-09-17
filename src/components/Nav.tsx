"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "Writing", href: "/writing" },
];

export default () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-10 flex justify-center w-screen">
      <div className="flex justify-center items-center bg-neutral-800/85 py-2.5 px-4 rounded-full *:cursor-pointer backdrop-blur-sm shadow-[0_24px_14px_#00000020,0_0_0_1px_rgba(38,38,38,0.75),0_4px_1 0px_#00000040] border border-neutral-600 text-neutral-50">
        {tabs.map(({ title, href }, index) => (
          <Link
            href={href}
            key={index}
            className={clsx(
              "text-neutral-500 hover:bg-neutral-50/30 rounded-full transition-colors ease-in-out delay-150 duration-400 py-1.5 px-3.5 hover:text-white text-sm",
              pathname === href
                ? "text-white underline underline-offset-4"
                : "text-neutral-500"
            )}
          >
            {title}
          </Link>
        ))}
        <h1>·</h1>
        <a
          href="mailto:mubeenulhassan396@gmail.com?subject=Project%20Inquiry"
          rel="noreferrer"
          target="_blank"
          className="text-white rounded-full py-1.5 px-3.5 text-sm  hover:bg-neutral-50/30 active:bg-neutral-50/40 bg-neutral-700 shadow-[0_10px_5px_-2.5px_#00000020,inset_0_4px_16px_rgba(150,150,150,0.5)] ml-4 no-underline"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};
