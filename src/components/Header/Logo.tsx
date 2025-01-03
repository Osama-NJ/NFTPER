import React from 'react';
import { Layers } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Logo() {
  const pathname = usePathname()
  
  const accentColor = pathname === '/bidding'
    ? 'text-[#ba5913]'
    : pathname === '/listing'
    ? 'text-blue-700'
    : 'text-green-500';

  return (
    <div className="flex items-center mb-1.5">
      <Layers className={`w-6 h-6 ${accentColor} mr-2`} />
      <h1 className="text-2xl font-[1000]">
        <span className={accentColor}>NFT</span>PER
      </h1>
    </div>
  );
}