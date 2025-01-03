"use client"
import React from 'react'
import nft1 from "@/images/nft1.jpg"
import nft2 from "@/images/nft2.jpg"
import nft3 from "@/images/nft3.jpg"
import { usePathname } from 'next/navigation'
const NFTBiddingIllustration: React.FC<{ frameNumbers: number[] }> = ({ frameNumbers }) => {

  const pathname = usePathname()

  const accentColor = pathname === '/bidding'
    ? '#ba5913'
    : pathname === '/listing'
    ? '#1d4ed8' // blue-700 equivalent in hex
    : '#22c55e'; // green-500 equivalent in hex

  return (
    <div className="w-full max-w-3xl mx-auto relative ">
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Background */}
        <defs>
          <linearGradient id="" x1="0" y1="0" x2="800" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1a1a2e" />
            <stop offset="1" stopColor="#16213e" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <clipPath id="circle-clip">
            <circle cx="400" cy="300" r="250" />
          </clipPath>
          <linearGradient id="circle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0f3460" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#bg-gradient)" />

        {/* Fancy Circle Design */}
        <g filter="url(#glow)">
          <circle cx="400" cy="300" r="250" fill="url(#circle-gradient)" opacity="0.1" />
          <circle cx="400" cy="300" r="250" fill="none" stroke="url(#circle-gradient)" strokeWidth="4" />
          <circle cx="400" cy="300" r="240" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.5" strokeDasharray="20 10" />
          <circle cx="400" cy="300" r="260" fill="none" stroke="#0f3460" strokeWidth="1" opacity="0.5" strokeDasharray="10 15" />
        </g>

        {/* NFT Frames */}
        {[
          { x: 200, y: 100, width: 180, height: 220, delay: 0, image: nft1 },
          { x: 420, y: 150, width: 160, height: 200, delay: 0.2, image: nft2 },
          { x: 300, y: 250, width: 200, height: 240, delay: 0.4, image: nft3 },
        ].map((frame, index) => (
          <g key={index}>
            <rect
              x={frame.x}
              y={frame.y}
              width={frame.width}
              height={frame.height}
              rx="20"
              fill="#18181b"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0;1"
                dur="1s"
                begin={`${frame.delay}s`}
                fill="freeze"
              />
            </rect>
            <image
              href={frame.image.src}
              x={frame.x + 10}
              y={frame.y + 10}
              width={frame.width - 20}
              height={frame.height - 20}
              opacity="0"
              clipPath="url(#circle-clip)"
            >
              <animate
                attributeName="opacity"
                values="0;1"
                dur="1s"
                begin={`${frame.delay + 0.3}s`}
                fill="freeze"
              />
            </image>
            <text
              x={frame.x + frame.width / 2}
              y={frame.y + frame.height + 30}
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fill="white"
              textAnchor="middle"
              opacity="0"
            >
              {`#${frameNumbers[index]}`}
              <animate
                attributeName="opacity"
                values="0;1"
                dur="1s"
                begin={`${frame.delay + 0.6}s`}
                fill="freeze"
              />
            </text>
          </g>
        ))}

        {/* Ethereum Symbol */}
        <g filter="url(#glow)">
          <path
            d="M390 500 L400 480 L410 500 L400 510 Z"
            fill="#16213e"
            stroke={accentColor}
            strokeWidth="2"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -10; 0 0"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M390 495 L400 505 L410 495"
            fill="none"
            stroke={accentColor}
            strokeWidth="2"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -10; 0 0"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Flying Cryptocurrency Icons */}

        {/* Animated Pulse Effect */}
        <circle cx="400" cy="300" r="250" fill="none" stroke={accentColor} strokeWidth="2" opacity="0.5">
          <animate
            attributeName="r"
            values="250;270;250"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.5;0.2;0.5"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Decorative Dots */}
        {Array.from({ length: 50 }).map((_, index) => {
          const angle = (index / 50) * Math.PI * 2;
          const x = 400 + Math.cos(angle) * 250;
          const y = 300 + Math.sin(angle) * 250;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="2"
              fill={accentColor}
              opacity="0.5"
            >
              <animate
                attributeName="opacity"
                values="0.5;1;0.5"
                dur={`${2 + Math.random() * 2}s`}
                repeatCount="indefinite"
                begin={`${Math.random() * 2}s`}
              />
            </circle>
          );
        })}
      </svg>
    </div>
  )
}

export default NFTBiddingIllustration

