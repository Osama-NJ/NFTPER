import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Twitter, BookOpen, User } from 'lucide-react';
import { AiOutlineDiscord } from "react-icons/ai";

const socialLinks = [
  { icon: AiOutlineDiscord, label: 'Discord', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: BookOpen, label: 'Docs', href: '#' },
  { icon: User, label: 'Profile', href: '#' },
];

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-8 mt-16">
      {socialLinks.map(({ icon: Icon, label, href }) => (
        <motion.a
          key={label}
          href={href}
          title={label}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Icon className="w-6 h-6" />
        </motion.a>
      ))}
    </div>
  );
}