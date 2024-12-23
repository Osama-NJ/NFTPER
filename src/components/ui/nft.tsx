import React from 'react';

const NFTBotIllustration = () => {
  return (
    <div className="w-full aspect-square max-w-[600px]">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0px 0px 20px rgba(16, 185, 129, 0.2))',
        }}
      >
        {/* Main Bot Body */}
        <rect
          x="120"
          y="100"
          width="160"
          height="200"
          rx="20"
          fill="#10B981"
          className="animate-pulse"
        />

        {/* Bot Screen */}
        <rect
          x="140"
          y="120"
          width="120"
          height="100"
          rx="15"
          fill="#065F46"
        />

        {/* Bot Display - Showing Bid Amount */}
        <text x="155" y="170" fill="#10B981" fontSize="24" fontWeight="bold">
          12.5 ETH
        </text>
        <text x="155" y="190" fill="#ffffff" fontSize="12">
          Current Bid
        </text>

        {/* Antenna with Pulse */}
        <rect
          x="190"
          y="80"
          width="20"
          height="40"
          fill="#065F46"
        />
        <circle
          cx="200"
          cy="70"
          r="10"
          fill="#10B981"
          className="animate-pulse"
        />

        {/* Floating NFT Cards with Bid Info */}
        <g className="animate-[bounce_2s_ease-in-out_infinite]">
          <rect x="50" y="150" width="60" height="70" rx="10" fill="#6366F1" opacity="0.9" />
          <text x="65" y="180" fill="white" fontSize="12">NFT</text>
          <text x="58" y="200" fill="white" fontSize="10">10.2 ETH</text>
          <text x="60" y="212" fill="white" fontSize="8">2h left</text>
        </g>

        <g className="animate-[bounce_2s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }}>
          <rect x="300" y="150" width="60" height="70" rx="10" fill="#EC4899" opacity="0.9" />
          <text x="315" y="180" fill="white" fontSize="12">NFT</text>
          <text x="308" y="200" fill="white" fontSize="10">8.5 ETH</text>
          <text x="310" y="212" fill="white" fontSize="8">4h left</text>
        </g>

        <g className="animate-[bounce_2s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>
          <rect x="50" y="250" width="60" height="70" rx="10" fill="#F59E0B" opacity="0.9" />
          <text x="65" y="280" fill="white" fontSize="12">NFT</text>
          <text x="58" y="300" fill="white" fontSize="10">15.7 ETH</text>
          <text x="60" y="312" fill="white" fontSize="8">1h left</text>
        </g>

        <g className="animate-[bounce_2s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}>
          <rect x="300" y="250" width="60" height="70" rx="10" fill="#8B5CF6" opacity="0.9" />
          <text x="315" y="280" fill="white" fontSize="12">NFT</text>
          <text x="308" y="300" fill="white" fontSize="10">11.3 ETH</text>
          <text x="310" y="312" fill="white" fontSize="8">30m left</text>
        </g>

        {/* Bid Arrows */}
        <path
          d="M50 200 H100 M300 200 H350"
          stroke="#10B981"
          strokeWidth="2"
          strokeDasharray="5,5"
          className="animate-pulse"
        />

        {/* Live Bidding Text */}
        <text x="160" y="350" fill="#64748B" fontSize="14" className="animate-pulse">
          LIVE BIDDING
        </text>

        {/* Competitive Bid Indicators */}
        <circle cx="120" cy="330" r="5" fill="#22C55E" className="animate-pulse" />
        <circle cx="140" cy="330" r="5" fill="#EF4444" className="animate-pulse" />
        <circle cx="160" cy="330" r="5" fill="#F59E0B" className="animate-pulse" />
      </svg>
    </div>
  );
};

export default NFTBotIllustration;