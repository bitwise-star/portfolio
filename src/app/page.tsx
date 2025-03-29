import NavBar from "@/app/components/nav/nav-bar";
import { WelcomeContainer } from "./components/welcomer/welcome-container";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="mt-20 min-w-max">
        <WelcomeContainer/>
      </main>
    </div>
  );
}
