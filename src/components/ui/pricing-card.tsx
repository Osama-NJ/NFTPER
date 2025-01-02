"use client"

import * as React from "react"
import { CircleCheck } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const pricingCardVariants = cva(
  "relative w-full transform overflow-hidden rounded-2xl border shadow-lg transition duration-300",
  {
    variants: {
      variant: {
        bidding: "bg-gray-800/50 border border-gray-700/50",
        listing: "border-gray-700 bg-gradient-to-br from-slate-700 to-slate-800",
        extreme: "border-transparent bg-transparent",
      },
      size: {
        default: "p-6 lg:p-8",
        sm: "p-4 lg:p-6",
        lg: "p-8 lg:p-10",
      },
      hover: {
        bidding: "hover:scale-[none] md:hover:scale-105",
        none: "hover:scale-100",
      }
    },
    defaultVariants: {
      variant: "bidding",
      size: "default",
      hover: "bidding"
    }
  }
)

export interface PricingCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingCardVariants> {
  heading: string
  description: string
  price: any
  buttonText: string
  list: string[]
  discount?: number
  listHeading?: string
  textcolor?:string
  buttonColor?:string,
  comingsoontext?:string,    
  onButtonClick?: () => void
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ 
    className, 
    variant, 
    size,
    hover,
    heading,
    description,
    price,
    discount,
    list,
    listHeading,
    textcolor,
    buttonText,
    buttonColor,
    onButtonClick,
    comingsoontext,
    ...props 
  }, ref) => {
    const withDiscount = React.useMemo(() => {
      return Math.round(price - (price * (discount ?? 100)) / 100)
    }, [price, discount])

    return (
      <div
        ref={ref}
        className={cn(pricingCardVariants({ variant, size, hover, className }))}
        {...props}
      >
        <div className="flex h-full min-w-60 w-full flex-col" >
          <div className="mb-4 lg:mb-6 xl:mb-8">
            <h3 className="mb-2 text-lg font-bold text-white lg:mb-4 lg:text-xl xl:text-2xl">
              {heading}
            </h3>
            <p className="text-gray-300 lg:text-base xl:text-xl">
              {description}
            </p>
          </div> 

          <div>
            <div className="mb-3 flex space-x-2 xl:mb-4">
              <span className={`text-3xl font-extrabold ${textcolor} lg:text-5xl  ${comingsoontext}`}>
              {discount ? withDiscount : price}
              </span>
              {discount && (
                <span className=" line-through md:text-lg lg:text-xl xl:text-2xl">
                  {price}
                </span>
              )}
            </div>

            {discount && (
              <div className="origin-center-right absolute right-[-50%] top-0 w-full -translate-x-6 translate-y-4 rotate-45 bg-gradient-to-r from-slate-600 to-slate-700 text-center text-white lg:text-lg xl:text-xl">
                {discount}%
              </div>
            )}

            <Button
              onClick={onButtonClick}
              className={`w-full  ${buttonColor}`}
            >
              {buttonText}
            </Button>

            <ul className={`mt-4 space-y-4  lg:mt-6 xl:mt-8 `}>
              {listHeading && <h5>{listHeading}</h5>}
              {list.map((text, index) => (
                <li key={index} className="flex items-center gap-3 ">
                  <CircleCheck className={`h-5 w-5 ${textcolor}`} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
)
PricingCard.displayName = "PricingCard"

export { PricingCard, pricingCardVariants } 