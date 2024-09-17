import { FaFlaskVial } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

interface projectsGuard {
  title: string;
  detail: string;
}

const projects: Array<projectsGuard> = [
  {
    title: "Thesus Store",
    detail: "2022 · Accessible command menu component.",
  },
  {
    title: "Craft",
    detail: "2024 · Interaction Design Labaratory.",
  },

  {
    title: "React Pointer",
    detail: "2021 · Lightweight custom cursors for React.",
  },
];

export default function Project() {
  return (
    <div className="relative">
      <div className="flex gap-x-2 items-center">
        <h1 className="font-medium text-base">Projects</h1>
        <FaFlaskVial className="text-lg text-gray-500" />
      </div>
      {/* Project List */}
      <div className=" w-[578px] absolute -left-4 py-2">
        {projects.map((project) => (
          <div
            className="group p-4 transition-all ease-in-out delay-150 duration-500 hover:bg-[#222222] w-fit rounded-md cursor-pointer"
            key={project.title}
          >
            <div className="flex items-end">
              <h1 className="underline group-hover:no-underline transition-all ease-in-out delay-150 duration-400">
                {project.title}
              </h1>
              <GoArrowUpRight className="text-gray-500 text-lg font-normal" />
            </div>
            <div className="flex  gap text-gray-500 text-sm">
              <h1>{project.detail}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
