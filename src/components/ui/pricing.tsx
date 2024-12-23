'use client'

import { useState } from 'react'
import { Check, X, Sparkles, ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { usePathname } from 'next/navigation'
import Script from 'next/script'

declare global {
  interface Window {
    DePayWidgets: any;
  }
}

export default function Pricing({ plans, addons, buttonText }: PricingProps) {
  const [showAddon, setShowAddon] = useState(false)
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])
  const pathname = usePathname()
  const TIER_PRICES = {
    standard: 0.07,
    pro: 0.1,
    prefix: 0.05,
    botcount: 0.02
  } as const;
  
  const handlePayment = (price: number) => {
    if (typeof window.DePayWidgets === 'undefined') {
      console.error('DePay widget not loaded');
      return;
    }

    window.DePayWidgets.Payment({
      accept: [
        {
          blockchain: "polygon",
          amount: price,
          token: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
          receiver: "0x3adC0b1c095B472692256E74581FF0C23aA64f25"
        },
        {
          blockchain: "ethereum",
          amount: price,
          token: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          receiver: "0x3adC0b1c095B472692256E74581FF0C23aA64f25"
        }
      ],
      amount: { token: true },
      succeeded: (transaction: any) => {
        setTimeout(() => {
          window.location.href = "https://docs.nftper.com/set-up";
        }, 1000);
      }
    });
  }

  const handlePlanPurchase = (planPrice: string) => {
    const price = parseFloat(planPrice.replace('$', ''));
    handlePayment(price);
  }

  const handleAddonPurchase = (addonPrice: string | number) => {
    const price = typeof addonPrice === 'string' ? 
      parseFloat(addonPrice.replace('$', '')) : 
      addonPrice;
    handlePayment(price);
  }

  const handleAddonToggle = (addonId: string) => {
    setSelectedAddons(current =>
      current.includes(addonId)
        ? current.filter(id => id !== addonId)
        : [...current, addonId]
    )
  }

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.umd.min.js" strategy="beforeInteractive" />
      <Script src="https://integrate.depay.com/widgets/v12.js" strategy="beforeInteractive" />

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white bg-clip-text">
              Choose Your Plan
            </h2>
            <p className="text-xl mb-8 text-gray-400">
              Unlock the power of automated NFT bidding
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan: PricingProps['plans'][number], index: number) => (
              <motion.div
                key={plan.name}
                className={`relative group rounded-2xl backdrop-blur-sm ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-green-500/10 to-green-900/10 border border-green-500/20' 
                    : 'bg-gray-800/50 border border-gray-700/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <span className="bg-green-500 text-white text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
                  <div className="mb-6 h-[80px] flex items-end">
                    <span className={`font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent ${plan.name === 'Ultra Access' || pathname === "/listing" ? 'text-3xl' : 'text-5xl'}`}>
                      {plan.price}
                    </span>
                  </div>
                  
                  <Button 
                  disabled = {pathname === "/listing" || pathname === "/extremebidding" }
                    className={`w-full ${
                      plan.popular
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    } transition-all duration-200 group-hover:scale-105`}
                    onClick={() => handlePlanPurchase(plan.price)}
                  >
                    
                    {buttonText}
                  </Button>
                </div>

                <div className="border-t border-gray-700/50">
                  <ul className="p-8 space-y-4">
                    {plan.features.map((feature: { included: boolean; name: string }, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        {feature.included ? (
                          <div className="rounded-full p-1 bg-green-500/10">
                            <Check className="h-4 w-4 text-green-500" />
                          </div>
                        ) : (
                          <div className="rounded-full p-1 bg-gray-700/50">
                            <X className="h-4 w-4 text-gray-500" />
                          </div>
                        )}
                        <span className={feature.included ? "text-gray-300" : "text-gray-500"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mb-8">
            <Button
              variant="outline"
              onClick={() => setShowAddon(!showAddon)}
              className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
            >
              {showAddon ? 'Hide' : 'Show'} Add-ons
              {showAddon ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
            </Button>
          </div>

          <AnimatePresence>
            {showAddon && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-4">
                  {addons.map((addon: { id: string; name: string; description: string; price: string | number }) => (
                    <motion.div
                      key={addon.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{addon.name}</h3>
                          <p className="text-gray-400">{addon.description}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          <span className="text-2xl font-bold text-green-500">
                            {typeof addon.price === 'number' ? addon.price.toFixed(3) : addon.price}
                          </span>
                          {pathname !== "/listing" && (
                            <Button 
                              variant="outline"
                              className={`w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white border-green-600`}
                              onClick={() => handleAddonPurchase(addon.price)}
                            >
                              PURCHASE
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}

export interface PricingProps {
  plans: Array<{
    name: string;
    price: string;
    features: Array<{ name: string; included: boolean }>;
    popular?: boolean;
  }>;
  addons: Array<{
    id: string;
    name: string;
    description: string;
    price: string | number;
  }>;
  buttonText: string;
}