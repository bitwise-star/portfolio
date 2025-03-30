"use client"

import { motion } from "motion/react";
import NavBar from "@/app/components/nav/nav-bar";
import { WelcomeContainer } from "./components/welcomer/welcome-container";
import { ProjectsContainer } from "./components/projects/projects-container";
import { useMobile } from "./hooks/use-mobile";

export default function Home() {
  const isMobile = useMobile(768);

  if (isMobile === undefined)
    return;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, delay: 1 }}
    >
      <NavBar />
      <main className={`${isMobile ? "mt-5" : "mt-20"} flex flex-col gap-20 p-5`}>
        <WelcomeContainer/>
        <ProjectsContainer/>
      </main>
    </motion.div>
  );
}
