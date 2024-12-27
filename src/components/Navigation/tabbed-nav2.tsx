'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { ArrowLeft, MessageSquare, Twitter, FileText, User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Separator } from '../ui/separator'

export default function TabbedNav2() {
  const [activeTab, setActiveTab] = useState<'bidding' | 'listing' | 'extreme'>('bidding')
  const pathname = usePathname();  // Gets the current path

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
              "px-4 py-3 rounded-full text-sm font-medium relative transition-all duration-200 ease-in-out",
              activeTab === 'bidding'
                ? "bg-zinc-800 text-white scale-105"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
            )} href={'#features'}          >
            Features
          </Link>
          <Link
            onClick={() => { setActiveTab('listing'); scrollToSection('pricing'); }}
            className={cn(
              "px-3 py-3 rounded-full text-sm font-medium relative transition-all duration-200 ease-in-out",
              activeTab === 'listing'
                ? "bg-zinc-800 text-white scale-105"
                : "text-zinc-400 hover:text-white "
            )}href={"#pricing"}
          >
            Pricing
          </Link>
          <Link
            onClick={() => { setActiveTab('extreme'); scrollToSection('faq'); }}
            className={cn(
              "px-3 py-3 rounded-full text-sm font-medium relative transition-all duration-200 ease-in-out",
              activeTab === 'extreme'
                ? "bg-zinc-800 text-white scale-105"
                : "text-zinc-400 hover:text-white "
            )}href={"#faq"}
          >
            Faq
          </Link>
        </div>



      </div>

    </div>
    </>
  )
}

