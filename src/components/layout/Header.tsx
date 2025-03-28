
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  href: string;
  children?: { title: string; href: string }[];
};

const navItems: NavItem[] = [
  { title: "الصفحة الرئيسة", href: "/" },
  { title: "الأخـبـــار", href: "/news" },
  { title: "مقالات الشيخ", href: "/articles" },
  { 
    title: "دروس و خـطب", 
    href: "/lectures",
    children: [
      { title: "لقاء الجمعة مرئي", href: "/lectures/friday-video" },
      { title: "لقاء الجمعة صوتي", href: "/lectures/friday-audio" },
      { title: "ملخص لقاءات الجمعة", href: "/lectures/friday-summary" },
    ]
  },
  { 
    title: "وسائط متعددة", 
    href: "/media",
    children: [
      { title: "حــوارات الشـيخ", href: "/media/interviews" },
      { title: "قناة الهيئة الاعلامية", href: "/media/channel" },
      { title: "كلمة في وليمة", href: "/media/feast-speeches" },
      { title: "موعظة في جنازة", href: "/media/funeral-speeches" },
      { title: "المداخلات التلفزيونية", href: "/media/tv-appearances" },
      { title: "مقتطفات مع الشيخ", href: "/media/clips" },
    ]
  },
  { title: "بيـــانات الشـيخ", href: "/statements" },
  { title: "أرشيف الجبهة", href: "/archive" },
  { title: "مؤلفات الشـيخ", href: "/books" },
  { title: "أقوال الصحف عن الشيخ", href: "/press" },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="text-2xl font-bold text-navy-800">
              <span className="text-navy-800">الشيخ </span>
              <span className="text-gold-500">علي بن حاج</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.children ? (
                  <div className="flex items-center cursor-pointer nav-link">
                    <span 
                      className={cn(
                        "flex items-center",
                        isActive(item.href) && "active"
                      )}
                      onClick={() => toggleDropdown(item.title)}
                    >
                      {item.title}
                      <ChevronDown className="ms-1 h-4 w-4" />
                    </span>
                    <div className={cn(
                      "absolute top-full right-0 mt-2 w-56 bg-white shadow-md rounded-md overflow-hidden transition-all duration-300 transform origin-top scale-y-0 opacity-0 invisible z-50",
                      openDropdown === item.title && "scale-y-100 opacity-100 visible"
                    )}>
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            to={child.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn("nav-link", isActive(item.href) && "active")}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <div key={item.title}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.title)}
                        className="flex justify-between items-center w-full py-2 text-right"
                      >
                        <span className={cn(isActive(item.href) && "font-medium")}>{item.title}</span>
                        <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === item.title && "transform rotate-180")} />
                      </button>
                      {openDropdown === item.title && (
                        <div className="mt-2 pr-4 border-r-2 border-gray-200">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              to={child.href}
                              className="block py-2 text-sm hover:text-primary-500"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn("block py-2", isActive(item.href) && "font-medium")}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
