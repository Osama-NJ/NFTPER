import { FeatureConfig } from '@/types/features';
import { FeatureCard } from './feature-card';

interface FeatureGridProps {
  features: FeatureConfig[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="py-24" id="features">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-3 text-white leading-tight">
          NFTPER offers bots that can do a variety of automated tasks for you
        </h1>
        <h2 className="text-xl text-center mb-12 text-[#ba5913] font-medium">
          Made for NFT flippers, by an NFT flipper
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

