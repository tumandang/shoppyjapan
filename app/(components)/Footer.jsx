import {
  Facebook,
  Instagram,
  Mail,
  MapIcon,
  Phone,
  PhoneCall,
  Pointer,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  const SocialMedia = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/shoppy.japan",
      label: "Instagram",
    },
    {
      icon: Twitter,
      href: "https://x.com/shoppy_japan",
      label: "X (Twitter)",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@ShoppyJapan",
      label: "Youtube",
    },
  ];
  const quicklink = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/" },
    { name: "Contact Us", href: "/" },
    { name: "Term And Condition", href: "/" },
  ];
  const office = [
    {
      name: "Shoppe Japan Global ( Japan )",
      address:
        "739-0321 Hiroshima-ken, Hiroshima-Shi, Akiku, Nakano 6-29-10 Sun Heights Sumita B202",
      notel: "+8190-6437-2903",
    },
    {
      name: "Shoppe Japan Global ( Malaysia )",
      address:
        "12A & 14A, Jalan Pulai Mutiara 9/5, Taman Pulai Mutiara 2, 81100 Johor Bahru, Johor",
      notel: "+60135987486",
    },
  ];
  return (
    <footer className="bg-[#1F1F1F] border-t border-border/50 padd-cont">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">
              Shoppe Japan
            </h3>
            <p className="mb-4">
              ShoppeJapan is your trusted destination for authentic Japanese
              products. From beauty and fashion to lifestyle essentials, we
              bring the best of Japan straight to your doorstep with quality you
              can count on.
            </p>
            <div className="flex space-x-4">
              {SocialMedia.map((i) => {
                const Icon = i.icon;
                return (
                  <Link
                    key={i.label}
                    href={i.href}
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5"></Icon>
                    <span className="sr-only">{i.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Quick Link */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quicklink.map((i) => (
                <li key={i.name}>
                  <Link
                    href={i.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">
              Get In Touch
            </h3>

            <ul className="space-y-2">
              <div className="flex flex-row space-x-2">
                <Mail color="White" size={15}></Mail>
                <p>shopanhq@gmail.com</p>
              </div>
              {office.map((i) => (
                <div key={i.name} className="space-y-2">
                  <h5 className="text-white">{i.name}</h5>
                  <div className="flex flex-row  items-center space-x-2">
                    
                    <p>{i.address}</p>
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <Phone color="white" size={15}></Phone>
                    <p>{i.notel}</p>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          © shoPan. {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
