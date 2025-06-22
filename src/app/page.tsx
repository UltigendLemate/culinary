"use client";
import Challenge from "@/components/Challenge";
import Contact from "@/components/Contact";
import MainContent from "@/components/Hero/MainContent";
import Navbar from "@/components/Hero/Navbar";
import Organizers from "@/components/Hero/Organizers";
import Jury from "@/components/Jury";
import Participants from "@/components/Participants";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <>
      <main className="flex md:h-screen flex-col items-center justify-between">
        {/* <Navbar /> */}
        <MainContent />
        <Organizers />
      </main>
      <Challenge />
      {/* <Jury /> */}
      <Participants />
      <Sponsors />
      <Contact />
    </>
  );
}
