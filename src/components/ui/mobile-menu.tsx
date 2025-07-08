import React, { useState } from "react";
import { Button } from "./button";
import { X, Menu } from "lucide-react";

interface MobileMenuProps {
  navItems: string[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="lg:hidden p-2"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={toggleMenu} />
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-semibold text-lg">Menu</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="p-2"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <nav className="p-4">
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-2 px-3 text-graygray-700 hover:text-brandprimary-bg hover:bg-gray-50 rounded-md transition-colors"
                      onClick={(e) => {
                        toggleMenu();
                        const targetId = `#${item.toLowerCase().replace(/\s+/g, '-')}`;
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                          e.preventDefault();
                          targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};