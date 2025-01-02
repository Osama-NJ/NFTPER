import React from 'react';
import { Layers } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Logo() {
  const pathname = usePathname()
  return (
    <div className="flex items-center mb-1.5">
      <Layers className={`w-6 h-6 ${pathname === "/bidding" ? "text-[#ba5913]" : "text-green-500"} mr-2`} />
      <h1 className="text-2xl font-[1000]">
        <span className={`${pathname === "/bidding" ? "text-[#ba5913]" : "text-green-500"}`}>NFT</span>PER
      </h1>
    </div>
  );
}