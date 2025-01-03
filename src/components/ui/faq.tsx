'use client'

import { usePathname } from 'next/navigation'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

interface FAQProps {
  title: string;
  faqs: FAQItem[];
  className?: string;
}

export function FAQ({ title, faqs, className = '' }: FAQProps) {
  const pathname = usePathname()
  
  const accentColor = pathname === '/bidding'
    ? 'text-[#ba5913]'
    : pathname === '/listing'
    ? 'text-blue-700'
    : 'text-green-500';

    console.log(pathname)
  return (
    <section className={`py-20 px-4 ${className}`} id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">{title}</h2>
        <h3 className="text-center text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h3>
        <p className="text-center text-gray-400 mb-8"></p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
              <AccordionTrigger 
                className={`text-left text-lg font-semibold text-white hover:${accentColor} transition-colors`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 motion-preset-fade motion-duration-1000">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

