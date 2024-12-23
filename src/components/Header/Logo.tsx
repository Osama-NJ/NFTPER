import React from 'react';
import { Layers } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center mb-1.5">
      <Layers className="w-6 h-6 text-green-500 mr-2" />
      <h1 className="text-2xl font-[1000]">
        <span className="text-green-500">NFT</span>PER
      </h1>
    </div>
  );
}