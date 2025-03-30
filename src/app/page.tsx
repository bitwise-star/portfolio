import NavBar from "@/app/components/nav/nav-bar";
import { WelcomeContainer } from "./components/welcomer/welcome-container";
import { ProjectsContainer } from "./components/projects/projects-container";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="mt-20 flex flex-col gap-20 p-5">
        <WelcomeContainer/>
        <ProjectsContainer/>
      </main>
      
    </div>
  );
}
