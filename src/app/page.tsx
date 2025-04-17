"use client"

import { motion } from "motion/react";
import NavBar from "@/components/nav-bar";
import { WelcomeContainer } from "../components/welcomer/welcome-container";
import { Projects } from "../components/projects";
import { useMobile } from "../hooks/use-mobile";
import { Experiences } from "../components/experiences";
import { Footer } from "../components/footer";

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
        <Projects/>
        <Experiences/>
      </main>
      <Footer/>
    </motion.div>
  );
}
