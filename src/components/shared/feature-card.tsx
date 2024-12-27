import { TypeIcon as type, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-[#ba5913]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#ba5913]/20">
      <Icon className="w-10 h-10 text-[#ba5913] mb-5" />
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

