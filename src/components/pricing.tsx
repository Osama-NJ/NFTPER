"use client"

import { PricingCard } from "@/components/ui/pricing-card"
import { Sparkles } from "lucide-react"

function Standedardbiddingpricing() {
    const basicPlan = {
        heading : "Standard Access",
        description : "1 month access",
        price: "Ξ0.07",

        buttonText:"PURCHASE",
        list : [
          "Up to 180 offers /m",
          "60 token offers /m",
          "120 collection offers/m",
          "1 bot count",
          "Add up to 5 wallets to bid from",
          "Instant Counter Offer (coming soon)",
          "Whitelist on future Lifetime NFT",
      
        ]
      }
    
  return (
    <div className="flex justify-center p-4 ">
      <PricingCard {...basicPlan} textcolor="text-[#ba5913]" buttonColor="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-600 hover:to-slate-600"/>
    </div>
  )
}

function Probiddingpricing() {
  const proPlan = {
    heading: "Pro Access",
    description: "1 month access",
    price:" Ξ0.10 ",
    buttonText: "PURCHASE",
    list: [
      "Up to total of 540 offers / minute",
      "180 offers / min per wallet",
      "60 token offers / m",
      "120 collection offers / m",
      "Bid with 3 wallets concurrentl",
      'Instant Counter Offer (coming soon)',
      'Whitelist on future Lifetime NFT',
    ],
  }

  return (
    <div className="flex justify-center p-4 relative">
      <div className="absolute -top-0 left-0 right-0 flex justify-center z-20">
        <span className="bg-[#ba5913] text-white text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" />
          Most Popular
        </span>
      </div>
      <PricingCard {...proPlan} variant="bidding" textcolor="text-[#ba5913]" className="backdrop-blur-xl bg-gradient-to-b from-orange-900/20 border border-[#ba5913]/30" buttonColor="bg-[#ba5913] hover:bg-[#ba5913]/90"/>
    </div>
  )
}

  function Extremebiddingpricing() {
    const extremePlan = {
      heading: "Ultra Access",
      description: "1 month access",
      price: "Coming Soon",
      buttonText: "",
      list: [
        "Up to 960 offers/m",
        "60 token offers/m",
        "900 collection offers/m",
        "1 ultra speed bot count",
        "Add up to 10 wallets to bid from",
        'Instant Counter Offer (coming soon)',
        'Whitelist on future Lifetime NF',
      ],
    }
  
    return (
      <div className="flex justify-center p-4">
        <PricingCard {...extremePlan} variant="bidding" textcolor="text-[#ba5913]" buttonColor="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-600 hover:to-slate-600 " comingsoontext="xl:text-3xl"/>
      </div>
    )
}
export { Standedardbiddingpricing, Probiddingpricing,Extremebiddingpricing }