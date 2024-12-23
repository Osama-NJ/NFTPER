'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { ArrowLeft, Twitter, FileText, User } from 'lucide-react'
import { useStore } from '@/app/hooks/path'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Separator } from '../ui/separator'
import TabbedNav2 from './tabbed-nav2'
import { AiOutlineDiscord } from 'react-icons/ai'
import { Logo } from "@/components/Header/Logo"

export default function TabbedNav() {
  const pathname = usePathname();  // Gets the current path

  if (pathname === "/") return null;  // Don't render the nav if on home page

  return (
    <>
    <div className="flex items-center justify-between px-4 py-2 w-full max-w-[1200px] mx-auto rounded-lg motion-preset-pop motion-duration-500">
      {/* Logo on the left */}
      <div className="flex items-center justify-center ">
        <Logo />
      </div>

      {/* Navigation tabs in the center */}
      <div className="flex items-center  relative flex-grow justify-center gap-2">
      <Link className="text-white hover:bg-zinc-800 p-1 rounded-md transition-colors ml-2" href={'/'}>
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <Link
          className={cn(
            "px-3 py-1 rounded-md text-sm font-medium relative transition-all duration-200 ease-in-out",
            pathname === '/bidding' ? "bg-emerald-500 text-white scale-105" : "text-zinc-400 hover:text-white hover:bg-zinc-800"
          )} href={'/bidding'}>
          Bidding
        </Link>
        <Link
          className={cn(
            "px-3 py-1 rounded-md text-sm font-medium relative transition-all duration-200 ease-in-out",
            pathname === '/listing' ? "bg-emerald-500 text-white scale-105" : "text-zinc-400 hover:text-white"
          )} href={"/listing"}>
          Listing
        </Link>
        <Link
          className={cn(
            "px-3 py-1 rounded-md text-sm font-medium relative transition-all duration-200 ease-in-out",
            pathname === '/extremebidding' ? "bg-emerald-500 text-white scale-105" : "text-zinc-400 hover:text-white"
          )} href={"/extremebidding"}>
          Extreme
        </Link>
        <Separator orientation='vertical' className='bg-zinc-700 h-8 mx-2'/>
        <TabbedNav2/>
      </div>

      {/* Social icons on the right */}
      <div className="flex items-center gap-2">
        <a className="text-zinc-400 hover:text-white p-1 rounded-md transition-colors" href="https://discord.gg/hsa6VKbjzw">
          <AiOutlineDiscord className='h-5 w-5' />
        </a>
        <a className="text-zinc-400 hover:text-white p-1 rounded-md transition-colors" href="https://twitter.com/NFTPERcom">
          <Twitter className="h-5 w-5" />
        </a>
        <a className="text-zinc-400 hover:text-white p-1 rounded-md transition-colors" href="https://docs.nftper.com/">
          <FileText className="h-5 w-5" />
        </a>
        <a className="text-zinc-400 hover:text-white p-1 rounded-md transition-colors" href="https://client.nftper.com">
          <User className="h-5 w-5" />
        </a>
      </div>
    </div>
    </>
  )
}

