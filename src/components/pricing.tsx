"use client"

import { PricingCard } from "@/components/ui/pricing-card"
import { Sparkles } from "lucide-react"

// Bidding Plans
function StandardBiddingPricing() {
    const basicPlan = {
        heading: "Standard Access",
        description: "1 month access",
        price: "Ξ0.07",
        buttonText: "PURCHASE",
        list: [
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
        <div className="flex justify-center p-4">
            <PricingCard {...basicPlan} 
                textcolor="text-[#ba5913]" 
                buttonColor="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-600 hover:to-slate-600"
            />
        </div>
    )
}

function ProBiddingPricing() {
    const proPlan = {
        heading: "Pro Access",
        description: "1 month access",
        price: " Ξ0.10 ",
        buttonText: "PURCHASE",
        list: [
            "Up to total of 540 offers / minute",
            "180 offers / min per wallet",
            "60 token offers / m",
            "120 collection offers / m",
            "Bid with 3 wallets concurrently",
            'Instant Counter Offer (coming soon)',
            'Whitelist on future Lifetime NFT',
        ]
    }

    return (
        <div className="flex justify-center p-4 relative">
            <div className="absolute -top-0 left-0 right-0 flex justify-center z-20">
                <span className="bg-[#ba5913] text-white text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                </span>
            </div>
            <PricingCard {...proPlan} 
                variant="bidding" 
                textcolor="text-[#ba5913]" 
                className="backdrop-blur-xl bg-gradient-to-b from-orange-900/20 border border-[#ba5913]/30" 
                buttonColor="bg-[#ba5913] hover:bg-[#ba5913]/90"
            />
        </div>
    )
}

function UltraBiddingPricing() {
    const ultraPlan = {
        heading: "Ultra Access",
        description: "1 month access",
        price: "Coming Soon",
        buttonText: "Coming Soon",
        disabled: true,
        list: [
            "Up to 960 offers/m",
            "60 token offers/m",
            "900 collection offers/m",
            "1 ultra speed bot count",
            "Add up to 10 wallets to bid from",
            'Instant Counter Offer (coming soon)',
            'Whitelist on future Lifetime NFT',
        ]
    }

    return (
        <div className="flex justify-center p-4">
            <PricingCard {...ultraPlan} 
                variant="bidding" 
                textcolor="text-[#ba5913]" 
                buttonColor="bg-gray-600 cursor-not-allowed" 
                comingsoontext="xl:text-3xl"
            />
        </div>
    )
}

// Listing Plans
function StandardListingPricing() {
    const standardPlan = {
        heading: "Standard Listing",
        description: "1 month access",
        price: "Coming Soon",
        buttonText: "Coming Soon",
        disabled: true,
        list: ['']
    }

    return (
        <div className="flex justify-center p-4">
            <PricingCard {...standardPlan} 
                variant="bidding" 
                textcolor="text-blue-700" 
                buttonColor="bg-blue-700 cursor-not-allowed" 
                comingsoontext="xl:text-3xl"
            />
        </div>
    )
}

function ProListingPricing() {
    const proPlan = {
        heading: "Pro Listing",
        description: "1 month access",
        price: "Coming Soon",
        buttonText: "Coming Soon",
        disabled: true,
        list: ['']
    }

    return (
        <div className="flex justify-center p-4">
            <PricingCard {...proPlan} 
                variant="bidding" 
                textcolor="text-blue-700" 
                buttonColor="bg-blue-700 cursor-not-allowed" 
                comingsoontext="xl:text-3xl"
            />
        </div>
    )
}

function ExtremeListingPricing() {
    const extremePlan = {
        heading: "Extreme Listing",
        description: "1 month access",
        price: "Coming Soon",
        buttonText: "Coming Soon",
        disabled: true,
        list: ['']
    }

    return (
        <div className="flex justify-center p-4">
            <PricingCard {...extremePlan} 
                variant="bidding" 
                textcolor="text-blue-700" 
                buttonColor="bg-blue-700 cursor-not-allowed" 
                comingsoontext="xl:text-3xl"
            />
        </div>
    )
}






function StandardextremePricing() {
  const Standardextreme = {
      heading: "Standard Listing",
      description: "1 month access",
      price: "Ξ0.35",
      buttonText: "PURCHASE",
      disabled: false,
      list: ['Up to 12 bids/second',' Average of 8 bids/second',' Instant counter bidding','Auto cancelling','Includes bidding for free',"Includes autolister(Coming Soon)",]
  }

  return (
      <div className="flex justify-center p-4">
          <PricingCard {...Standardextreme} 
              variant="bidding" 
              textcolor="text-green-500" 
              buttonColor="bg-green-500 " 
              comingsoontext="xl:text-3xl"
          />
      </div> 
  )
}



function ProdextremePricing() {
  const Proextreme = {
      heading: "Standard Listing",
      description: "1 month access",
      price: "Ξ0.6",
      buttonText: "Coming Soon",
      disabled: false,
      list: ['Up to 30 bids/sec','Average of 20 bids/sec','Instant counter bidding','Auto cancelling','Includes bidding for free',' Includes autolister (coming soon)']
  }

  return (
      <div className="flex justify-center p-4">
          <PricingCard {...Proextreme} 
              variant="bidding" 
              textcolor="text-green-500" 
              buttonColor="bg-green-500" 
              comingsoontext="xl:text-3xl"
              className="bg-gradient-to-b from-green-900"
          />
      </div>
  )
}


function UltradextremePricing() {
    const Proextreme = {
        heading: "Standard Listing",
        description: "1 month access",
        price: "Ξ0.82",
        buttonText: "Coming Soon",
        disabled: false,
        list: [
            'Up to 45 bids/sec',
            'Average of 30 bids/sec',
            'Instant counter bidding',
            'Auto cancelling',
            'Includes bidding for free',
            'Includes autolister (coming soon)'
        ]
    }

    return (
        <div className="flex justify-center p-4">
            <PricingCard {...Proextreme} 
                variant="bidding" 
                textcolor="text-green-500" 
                buttonColor="bg-green-500 " 
                comingsoontext="xl:text-3xl"
            />
        </div>
    )
}


export { 
    StandardBiddingPricing, 
    ProBiddingPricing, 
    UltraBiddingPricing, 
    StandardListingPricing, 
    ProListingPricing, 
    ExtremeListingPricing ,
    StandardextremePricing,
    ProdextremePricing,
    UltradextremePricing
}