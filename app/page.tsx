"use client";
import { InfoBar } from "@/components/app/Inforbar";
import { Presentation } from "@/components/app/Presentation";
export default function Home() {
  return (
    <main className="container lg:px-24">
      <Presentation />
      <InfoBar />
    </main>
  );
}
