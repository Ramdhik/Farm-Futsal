"use client";
import Image from "next/image";
import * as React from "react";
import Navbar from "@/components/ui/navbar";
import HomePage from "./Home/page";

export default function Home() {
  return (
    <div className="bg-white">
      <HomePage></HomePage>
    </div>
  );
}
