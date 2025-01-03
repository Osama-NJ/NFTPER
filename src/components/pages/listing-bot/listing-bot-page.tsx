'use client'

import { PageContainer } from '@/components/shared/page-container'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { biddingBotFeatures, listingBotFeatures } from '@/config/features'
import { usePathname } from 'next/navigation'
import { useStore } from '@/app/hooks/path'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ArrowRight, Bot, Sparkles } from 'lucide-react'
import img from "@/images/nft.png"
import { FAQ } from '@/components/ui/faq'
import { ExtremeListingPricing, ProListingPricing, StandardListingPricing } from '@/components/pricing'
import NFTBiddingIllustration from '@/components/Illustration/extreeme-illustration'
export function ListingBotPage() {
  const pathname = usePathname()

  const hoverColor = pathname === '/bidding'
    ? 'hover:text-[#ba5913]'
    : pathname === '/listing'
    ? 'hover:text-blue-700'
    : '';

  const biddingfaq = [
    {
      question: "What does NFTPER offer? ",
      answer: "We are a new service provider, and we offer autonomous bots that can send offers on NFTs for you. "
    },
    {
      question: "Who is the NFTPER team?",
      answer: (
        <>I'm <a href='https://alporat.com/' className={`hover:underline ${hoverColor}`}>alporat</a>, and I'm currently the sole developer and creator of NFTPER.</>
      )
    },
    {
      question: "Will there be Founder NFTs in the future ?",
      answer: "We plan to launch Lifetime Access NFTs on OpenSea in the near future."
    },
    {
      question: "Do you have an affiliate program ?",
      answer: "Contact us via Discord to join our affiliate program, where you can get a cut from your referrals' first month subscription."
    },
    {
      question: "There is a bug, what should I do ? ",
      answer: (
        <>Contact us via <a href='https://discord.gg/hsa6VKbjzw' className={`hover:underline ${hoverColor}`}>Discord</a>, to join our affiliate program, where you can get a cut from your referrals' first month subscription.</>
      )
    },
    {
      question: "I have more questions.",
      answer: (
        <>You can join our <a href='https://discord.gg/hsa6VKbjzw' className={`hover:underline ${hoverColor}`}>Discord</a>, and ask them there, or you can email us directly at <a href='mailto:contact@nftper.com' className={`hover:underline ${hoverColor}`}>contact@nftper.com</a>.</>
      )
    },
  ]
  const listingaddons = [ 
      {
        id :"0",
        name:"Coming Soon",
        description : "",
        price : "Coming Soon"
  
      
      },
  ]
  const listingplans = [
    
    {
      name: 'Standard Access',
      price: "Coming Soon",
      features: [
      ],
    },
    {
      name: 'Pro Access',
      popular: true,
      price: "Coming Soon",
      features: [
      ],
    },
    {
      name: 'Ultra Access',
      price: "Coming Soon",
      features: [
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
              <div className="inline-block px-4 py-2 bg-blue-500/10 rounded-full relative ">

                <div className="flex items-center gap-2 text-blue-600 ">
                  <Bot className="w-4 h-4" />

                  <span className="text-sm font-medium">

                    Automated NFT Listing</span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Automatically list NFTs with our 
              {' '}
                
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                  Listing Bot
                  </span>
                </span>
                {' '}
                
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl">
                Automate and dominate NFT auctions with precision mass listing. Stay ahead of the competition with advanced listing strategies.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-600 text-white">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-500/20 hover:bg-blue-500/10">
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

                <div className="relative z-10 ">
                  {/* Add your NFT preview or bot interface mockup here */}
                  <NFTBiddingIllustration frameNumbers={[1,2,3]} />

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

      <FeatureGrid features={listingBotFeatures} />
      <div id='pricing' className="text-center mb-16"><h2 className="text-4xl font-bold mb-4 text-white bg-clip-text">Choose Your Plan</h2><p className="text-xl mb-8 text-blue-700">Unlock the power of automated NFT bidding</p></div>

      <div className='flex xl:flex-row flex-col w-full  gap-4 px-4 md:px-6' >
        <ExtremeListingPricing/>
        <ProListingPricing/>
        <ExtremeListingPricing/>
      </div>
      <FAQ title={''} faqs={biddingfaq}/>
    </PageContainer>
  )
}

