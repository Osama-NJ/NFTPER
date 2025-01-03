import { TypeIcon as type, LucideIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  const pathname = usePathname();
  
  const accentColor = pathname === '/bidding'
    ? '[#ba5913]'
    : pathname === '/listing'
    ? 'blue-700'
    : 'green-500';

  return (
    <div className={`p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-${accentColor}/50 transition-all duration-300 hover:shadow-lg hover:shadow-${accentColor}/20`}>
      <Icon className={`w-10 h-10 text-${accentColor} mb-5`} />
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

