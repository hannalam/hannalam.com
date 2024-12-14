import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  href: string;
  icon: LucideIcon;
  text: string;
  external?: boolean;
}

export const NavLink = ({ href, icon: Icon, text, external }: NavLinkProps) => (
  <a
    href={href}
    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-200"
    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
  >
    <Icon size={18} />
    <span>{text}</span>
  </a>
);

export const MobileNavLink = ({ href, icon: Icon, text, external }: NavLinkProps) => (
  <a
    href={href}
    className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
  >
    <Icon size={18} />
    <span>{text}</span>
  </a>
);