import Header from "@/components/project/Header";
import Main from "@/components/project/Main";
import { projectsInfo } from "@/data/projects";

export default function Projects() {
  return (
    <div>
      <Header />
      <Main projects={projectsInfo} />
    </div>
  );
}
