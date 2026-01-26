"use client";

import { useRef, useEffect, useState } from "react";
import { Menu, ArrowUp, Github, Linkedin, Mail, X } from "lucide-react";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  color: string;
  href?: string;
  onClick?: () => void;
}

export default function ToggleTool() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [
    {
      icon: <ArrowUp size={20} />,
      label: "Kembali ke Atas",
      color: "bg-blue-500 hover:bg-blue-600",
      onClick: () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      color: "bg-gray-800 hover:bg-gray-900",
      href: "https://github.com/rafif2112",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      color: "bg-blue-600 hover:bg-blue-700",
      href: "https://linkedin.com/in/muhamad-rafif22",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      color: "bg-red-500 hover:bg-red-600",
      href: "mailto:mrafiff3@gmail.com",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end gap-4"
    >
      {/* Menu Items Wrapper */}
      <div className="flex flex-col-reverse items-end gap-3">
        {menuItems.map((item, index) => (
          <MenuButton
            key={item.label}
            item={item}
            isOpen={isOpen}
            index={index}
            totalItems={menuItems.length}
          />
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        className={`
          relative z-50 flex items-center justify-center p-4 text-white shadow-lg rounded-full 
          transition-all duration-300 transform hover:scale-105 hover:shadow-xl
          bg-linear-to-r from-blue-500 to-blue-600
        `}
      >
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </button>
    </div>
  );
}

function MenuButton({
  item,
  isOpen,
  index,
//   totalItems,
}: {
  item: MenuItem;
  isOpen: boolean;
  index: number;
  totalItems: number;
}) {
  const isLink = !!item.href;
  const Component = isLink ? "a" : "button";
  
  const transitionDelay = isOpen ? `${index * 50}ms` : "0ms";
  
  const baseClasses = `
    relative flex items-center justify-center p-4 text-white rounded-full shadow-lg 
    transition-all duration-300 transform hover:scale-110 hover:shadow-xl
    ${item.color}
  `;

  const visibilityClasses = isOpen
    ? "translate-y-0 opacity-100 scale-100"
    : "translate-y-10 opacity-0 scale-75 pointer-events-none";

  const props = isLink
    ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick: item.onClick };

  return (
    <div
      className={`relative flex items-center group ${visibilityClasses}`}
      style={{ transitionDelay }}
    >
      {/* Tooltip Label (Sebelah Kiri) */}
      <span
        className={`
            absolute right-full mr-4 px-3 py-1.5 text-sm font-medium text-white 
            bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-sm whitespace-nowrap
            opacity-0 -translate-x-2 transition-all duration-300 pointer-events-none
            group-hover:opacity-100 group-hover:translate-x-0
        `}
      >
        {item.label}
      </span>

      {/* Button / Link */}
      <Component {...props} className={baseClasses} aria-label={item.label}>
        {item.icon}
      </Component>
    </div>
  );
}