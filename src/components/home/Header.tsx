import { FaTwitter, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";

const socials = [
  { icon: <FaTwitter />, label: "Twitter", href: "https://x.com/" },
  {
    icon: <FaLinkedinIn />,
    label: "Linkedin",
    href: "https://www.linkedin.com/in/mubeen-ul-hassan/",
  },
  { icon: <FaDiscord />, label: "Discord", href: "https://discord.com/" },
  {
    icon: <FaGithub />,
    label: "Github",
    href: "https://github.com/Mubeen-Ul-Hassan",
  },
];

export default function Header() {
  return (
    <header className="text-white">
      <Headshot />
      <div className="mt-3 sm:mt-6 sm:font-medium sm:text-base text-sm">
        <h1 className="animate-intro">Mubeen Ul Hassan</h1>
        <div className="flex sm:justify-between sm:flex-row flex-col gap-y-2">
          <h1 className="animate-intro">
            Software Engineer And Open Source Contributor
          </h1>
          <div className="flex gap-x-2 items-center">
            {socials.map(({ icon, label, href }, index) => (
              <a
                href={href}
                key={index}
                aria-label={label}
                target="_blank"
                className="transition-colors cursor-pointer sm:text-xl text-lg text-neutral-500 hover:text-neutral-400"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-3 sm:my-6 animate-intro border-neutral-800 " />
    </header>
  );
}

const Headshot = () => {
  return (
    <div>
      <Image
        src={"/profile.jpg"}
        width={45}
        height={45}
        alt="My face"
        quality={100}
        priority
        className="rounded-full animate-img"
      />
    </div>
  );
};
