'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { ArrowLeft, Twitter, FileText, User, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AiOutlineDiscord } from 'react-icons/ai'
import { Logo } from "@/components/Header/Logo"
import { Separator } from "@/components/ui/separator"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  if (pathname === "/") return null

  const routeItems = [
    { name: 'Bidding', href: '/bidding' },
    { name: 'Listing', href: '/listing' },
    { name: 'Extreme', href: '/extremebidding' },
  ]

  const sectionItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ]

  const socialItems = [
    { name: 'Discord', href: 'https://discord.gg/hsa6VKbjzw', icon: AiOutlineDiscord },
    { name: 'Twitter', href: 'https://twitter.com/NFTPERcom', icon: Twitter },
    { name: 'Docs', href: 'https://docs.nftper.com/', icon: FileText },
    { name: 'User', href: 'https://client.nftper.com', icon: User },
  ]

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between px-4 py-2">
        <Logo />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0  bg-zinc-900 bg-opacity-95">
          <div className="flex flex-col h-full p-4">
            <div className="flex justify-between items-center mb-8">
              <Logo />
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Main Routes */}
            <nav className="space-y-2">
              {routeItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 rounded-md text-lg font-medium transition-colors w-full",
                    pathname === item.href 
                      ? "bg-emerald-500 text-white" 
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Separator */}
            <Separator className="my-6 bg-zinc-800" />

            {/* Section Navigation */}
            <nav className="space-y-2">
              {sectionItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 rounded-md text-lg font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="mt-auto pt-6">
              <Separator className="mb-6 bg-zinc-800" />
              <div className="flex justify-center space-x-4">
                {socialItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-zinc-400 hover:text-white p-2 rounded-md transition-colors"
                    aria-label={item.name}
                  >
                    <item.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

