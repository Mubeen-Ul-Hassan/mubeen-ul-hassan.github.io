import { RiPencilRuler2Fill } from "react-icons/ri";

export default () => (
  <header>
    <div className="h-10 w-10 overflow-hidden rounded-full">
      <div className="flex h-full w-full animate-img items-center justify-center rounded-full border border-neutral-300 bg-neutral-200 text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800">
        <RiPencilRuler2Fill className="h-8 w-8" />
      </div>
    </div>
    <div className="mt-6 text-base">
      <h1 className="animate-intro font-medium">Project</h1>
      <h2 className="animate-intro [animation-delay:100ms]">
        Experiment laboratory
      </h2>
    </div>
    <hr className="my-6 animate-intro border-neutral-200 [animation-delay:150ms] dark:border-neutral-800" />
  </header>
);