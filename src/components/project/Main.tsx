import Link from "next/link";

export interface Projects {
  title: string;
  description: string;
  href: string;
  date: string;
}

export default function Main({ projects }: { projects: Projects[] }) {
  return (
    <div>
      {projects &&
        projects.map(({ title, description, href, date }, index) => (
          <div key={index} className="pb-4 cursor-pointer">
            <Link href={href} target="_blank">
              <h1 className="underline decoration-wavy decoration-3 hover:decoration-neutral-500 transition-all ease-in-out delay-75 duration-150">
                {title}
              </h1>
              <div className="flex justify-between text-sm text-neutral-500">
                <h1 className="w-10/12">{description}</h1>
                <h1>{date}</h1>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}
