
import React from "react";
import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

interface FeaturedItemProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
  category: string;
  categoryLink: string;
}

const featuredItems: FeaturedItemProps[] = [
  {
    title: "دور العلماء في إصلاح المجتمع",
    excerpt: "يناقش الشيخ في هذا المقال الدور الهام الذي يلعبه العلماء في إصلاح المجتمع والنهوض به من خلال نشر العلم والوعي...",
    date: "15 أبريل 2023",
    readTime: "10 دقائق",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80",
    link: "/articles/1",
    category: "مقالات",
    categoryLink: "/articles"
  },
  {
    title: "تحديات الأمة الإسلامية المعاصرة",
    excerpt: "يستعرض الشيخ في هذا اللقاء أبرز التحديات التي تواجه الأمة الإسلامية في العصر الحالي وكيفية مواجهتها...",
    date: "3 مارس 2023",
    readTime: "15 دقيقة",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
    link: "/media/interviews/1",
    category: "حوارات",
    categoryLink: "/media/interviews"
  },
  {
    title: "شرح حديث: إنما الأعمال بالنيات",
    excerpt: "يقدم الشيخ في هذا الدرس شرحًا مفصلاً لحديث النبي صلى الله عليه وسلم: إنما الأعمال بالنيات...",
    date: "27 فبراير 2023",
    readTime: "45 دقيقة",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
    link: "/lectures/1",
    category: "دروس",
    categoryLink: "/lectures"
  }
];

const FeaturedItem: React.FC<FeaturedItemProps> = ({
  title,
  excerpt,
  date,
  readTime,
  image,
  link,
  category,
  categoryLink
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <Link 
          to={categoryLink}
          className="inline-block text-sm font-medium text-gold-600 hover:text-gold-700 mb-2"
        >
          {category}
        </Link>
        <h3 className="text-xl font-bold mb-2">
          <Link to={link} className="hover:text-primary transition-colors duration-200">
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 me-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 me-1" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedContent: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="محتوى مميز"
          subtitle="أحدث المقالات والدروس والحوارات للشيخ علي بن حاج"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <FeaturedItem key={index} {...item} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/articles" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
          >
            <span>عرض المزيد من المحتوى</span>
            <ArrowLeft className="mr-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
