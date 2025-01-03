'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { ArrowLeft, MessageSquare, Twitter, FileText, User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Separator } from '../ui/separator'
import { useRef } from "react";

export default function TabbedNav2() {
  const [activeTab, setActiveTab] = useState<'bidding' | 'listing' | 'extreme'>('bidding')
  const pathname = usePathname();  // Gets the current path

  const SIZE = 5;
  const list = new Array(SIZE).fill(0);
    const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  if (pathname === "/") return null;  // Don't render the nav if on home page

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <div className="flex items-center justify-center py-2  rounded-lg motion-preset-pop motion-duration-500
">
      <div className="flex items-center gap-2">

        <div className="flex items-center gap-0 relative">
          <Link
            onClick={() => { setActiveTab('bidding'); scrollToSection('features'); }}
            className={cn(
              "px-4 py-3 rounded-full text-sm font-medium relative transition-all duration-200 ease-in-out text-zinc-400 hover:text-white",
            )} href={'#features'} scroll={false}>
            Features
          </Link>
          <Link
            onClick={() => { setActiveTab('listing'); scrollToSection('pricing'); }}
            className={cn(
              "px-3 py-3 rounded-full text-sm font-medium relative transition-all duration-200 ease-in-out text-zinc-400 hover:text-white",
            )} href={"#pricing"} scroll={false}>
            Pricing
          </Link>
          <Link
            onClick={() => { setActiveTab('extreme'); scrollToSection('faq'); }}
            className={cn(
              "px-3 py-3 rounded-full text-sm font-medium relative transition-all duration-200 ease-in-out text-zinc-400 hover:text-white",
            )} href={"#faq"} scroll={false}>
            Faq
          </Link>
        </div>



      </div>

    </div>
    </>
  )
}

