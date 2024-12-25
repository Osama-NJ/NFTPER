"use client"
import { cn } from "@/lib/utils"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"
import { usePathname} from "next/navigation"
import { AiOutlineDiscord } from "react-icons/ai"
import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/Header/Logo"
import  TabbedNav2  from "@/components/Navigation/tabbed-nav2"
import { MobileNav } from './MobileNav'

import {Twitter,FileText,User} from 'lucide-react'


 
export default function Navbar() {
  const pathname = usePathname()

  return (
    <>
      <div className="w-full max-w-[1150px] mx-auto z-40 fixed">
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <div className="hidden lg:flex items-center justify-between px-4 py-8  rounded-lg motion-preset-pop motion-duration-500 ">
          {/* Logo on the left */}
          <div className="flex items-center justify-center p-3">
            <Logo />
          </div>

          {/* Navigation tabs in the center */}

          {pathname != '/' ? 

          <div className="flex items-center relative flex-grow justify-center gap-2  ">
              <>
                <Link className="text-white p-1 rounded-md transition-colors ml-2" href={'/'}>
                  <ArrowLeft className="h-5 w-5" />
                </Link>

                <Link
                  className={cn(
                    "px-3 py-1 rounded-md text-sm font-medium relative transition-all duration-200 ease-in-out",
                    pathname === '/bidding' ? "bg-emerald-500 text-white scale-105" : "text-zinc-400 hover:text-white"
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
              </>
            
          </div>
          :null}
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
      </div>
    </>
  )
}

