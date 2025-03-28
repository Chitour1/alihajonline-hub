
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-navy-900 text-white overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&q=80')", 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      ></div>
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gold-500">الشيخ علي بن حاج</span>
            <br />مفكر وعالم وداعية إسلامي
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            منصة شاملة تجمع أفكار وخطب ومقالات ودروس الشيخ علي بن حاج، ومركز بحثي يسعى لنشر الوعي الإسلامي الصحيح
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/articles"
              className="bg-gold-500 text-navy-900 px-6 py-3 rounded-md font-medium hover:bg-gold-600 transition-colors duration-300 flex items-center"
            >
              <span>مقالات الشيخ</span>
              <ArrowLeftCircle className="mr-2 h-5 w-5" />
            </Link>
            <Link
              to="/lectures"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-md font-medium hover:bg-white/20 transition-colors duration-300"
            >
              دروس وخطب
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
