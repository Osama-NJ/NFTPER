'use client'

import { PageContainer } from '@/components/shared/page-container'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { biddingBotFeatures, extremeBiddingFeatures } from '@/config/features'
import { usePathname } from 'next/navigation'
import { useStore } from '@/app/hooks/path'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Pricing from '@/components/ui/pricing'
import Image from 'next/image'
import { ArrowRight, Bot, Sparkles } from 'lucide-react'
import img from "@/images/nft.png"
import { FAQ } from '@/components/ui/faq'
import NFTBotIllustration from '@/components/ui/nft'
export default function ExtremeBiddingPag() {

  const biddingfaq = [
    {question:"What does NFTPER offer? ", answer:"We are a new service provider, and we offer autonomous bots that can send offers on NFTs for you. "},
    {question:"Who is the NFTPER team?", answer: (
        <>I'm <a href='https://alporat.com/' className='hover:underline hover:text-green-400'>alporat</a>, and I'm currently the sole developer and creator of NFTPER.</>
    )},
    {question:"Will there be Founder NFTs in the future ?", answer:"We plan to launch Lifetime Access NFTs on OpenSea in the near future."},
    {question:"Do you have an affiliate program ?", answer:"Contact us via Discord to join our affiliate program, where you can get a cut from your referrals' first month subscription."},
    {question:"There is a bug, what should I do ? ", answer: (
      <>Contact us via  <a href='https://discord.gg/hsa6VKbjzw' className='hover:underline hover:text-green-400'>Discord</a>, to join our affiliate program, where you can get a cut from your referrals' first month subscription..</>
  )}, 


    {question:"I have more questions.",answer: (
      <>You can join our <a href='https://discord.gg/hsa6VKbjzw' className='hover:underline hover:text-green-400'>Discord</a>, and ask them there, or you can email us directly at <a href='mailto:contact@nftper.com' className='hover:underline hover:text-green-400'>contact@nftper.com</a>.</>
  )},

  ]

  const addonsplans = [ 
    {
      id :"0",
      name:"Remove Prefix",
      description : "Remove NFTPER prefix from your username",
      price : "Ξ0.2"

    
    },
    
  ]

  const extremeplans = [
    
    {
      name: 'Standard Access',
      price: "€0.50/mo",
      features: [
        { name: '8 token offers / sec (28800/hr)', included: true },
        { name: 'Instant counter bidding', included: true },
        { name: 'Includes bidding for free', included: true },
      ],
    },
    {
      name: 'Pro Access',
      popular: true,
      price: "€1.00/mo",
      features: [
        { name: '20 token offers / sec (72000/hr)', included: true },
        { name: 'Instant counter bidding', included: true },
        { name: 'Automatic cancelling', included: true },
        { name: 'Includes bidding for free', included: true },
      ],
    },
    {
      name: 'Ultra Access',
      price: "Coming Soon",
      features: [
        { name: '45 token offers / sec (162000/hr)', included: true },
        { name: 'Instant counter bidding', included: true },
        { name: 'Automatic cancelling', included: true },
        { name: 'Includes bidding for free', included: true },
      ],
    },
  ]

  return (
    <PageContainer title={''} description={''}>
      <section className="relative py-20 px-4 min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80">
        {/* Animated background elements */}
        <div className="absolute inset-0 w-full h-full">
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8">
              <div className="inline-block px-4 py-2 bg-emerald-500/10 rounded-full relative ">

                <div className="flex items-center gap-2 text-emerald-500 ">
                  <Bot className="w-4 h-4" />

                  <span className="text-sm font-medium">

                    Automated NFT Bidding</span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Maximize Your NFT Game with{' '}
                
                <span className="relative">
                  <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                    NFTPER
                  </span>
                </span>
                {' '}Bidding Bot
                
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl">
                Automate and dominate NFT auctions with precision mass bidding. Stay ahead of the competition with advanced bidding strategies.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-emerald-500/20 hover:bg-emerald-500/10">
                  Watch Demo
                </Button>
              </div>

              {/* <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-background bg-emerald-500/20"
                    />
                  ))}
                </div>
                <p>Join 1000+ traders using NFTPER</p>
              </div> */}
            </div>

            <div className="relative lg:block">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent backdrop-blur-sm">
                <div className="absolute inset-0 bg-grid-white/5" />
                <div className="relative z-10 ">
                  {/* Add your NFT preview or bot interface mockup here */}
                  {/* <Image src={img} alt={''} /> */}
                  <NFTBotIllustration/>
                  <div className="w-full h-full rounded-lg bg-background/40 backdrop-blur-md border border-emerald-500/20 t flex items-center justify-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .bg-grid-white\/5 {
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>

      <FeatureGrid features={extremeBiddingFeatures} />
      <Pricing plans={extremeplans} addons={addonsplans} buttonText={'PURCHASE'} />
      <FAQ title={''} faqs={biddingfaq}/>
    </PageContainer>
  )
}

