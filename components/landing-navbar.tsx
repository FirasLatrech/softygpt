"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="flex items-center justify-between p-4 bg-transparent">
      <Link href="/" className="flex items-center">
        <div className="relative w-8 h-8 mr-4 scale-120 animate-spin">
          <Image fill alt="Logo" src="/test.png" className="scale-150 " />
        </div>
        <h1
          className={cn(
            "text-2xl font-bold  from-inherit text-white",
            font.className
          )}
        >
          Softy Gpt
        </h1>
      </Link>
      <div className="flex items-center gap-x-2 ">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full ">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
