
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

interface NewsItemProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
  featured?: boolean;
}

const newsItems: NewsItemProps[] = [
  {
    title: "الشيخ علي بن حاج يلقي محاضرة في الملتقى الدولي للفكر الإسلامي",
    excerpt: "شارك الشيخ علي بن حاج في الملتقى الدولي للفكر الإسلامي الذي أقيم في العاصمة وألقى محاضرة بعنوان 'الوسطية في الفكر الإسلامي'...",
    date: "20 أبريل 2023",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80",
    link: "/news/1",
    featured: true
  },
  {
    title: "إصدار كتاب جديد للشيخ بعنوان 'رؤية إسلامية معاصرة'",
    excerpt: "أعلن الشيخ علي بن حاج عن إصدار كتابه الجديد الذي يناقش القضايا المعاصرة من منظور إسلامي...",
    date: "12 أبريل 2023",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
    link: "/news/2"
  },
  {
    title: "الشيخ يشارك في ندوة حول تحديات العالم الإسلامي",
    excerpt: "شارك الشيخ علي بن حاج في ندوة فكرية حول التحديات التي تواجه العالم الإسلامي المعاصر وسبل مواجهتها...",
    date: "5 أبريل 2023",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
    link: "/news/3"
  },
  {
    title: "مقابلة خاصة مع الشيخ حول آخر مؤلفاته",
    excerpt: "أجرت قناة الجزيرة مقابلة خاصة مع الشيخ علي بن حاج للحديث عن آخر مؤلفاته وآرائه حول القضايا المعاصرة...",
    date: "28 مارس 2023",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&q=80",
    link: "/news/4"
  }
];

const FeaturedNewsItem: React.FC<NewsItemProps> = ({
  title,
  excerpt,
  date,
  image,
  link
}) => {
  return (
    <div className="relative bg-navy-900 text-white rounded-lg overflow-hidden h-96 group">
      <div 
        className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/70 to-transparent z-10"
      ></div>
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="flex items-center text-gold-400 mb-2">
          <Calendar className="h-4 w-4 me-1" />
          <span className="text-sm">{date}</span>
        </div>
        <h3 className="text-2xl font-bold mb-3">
          <Link to={link} className="hover:text-gold-400 transition-colors duration-200">
            {title}
          </Link>
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{excerpt}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-gold-400 hover:text-gold-300 font-medium transition-colors duration-200"
        >
          <span>اقرأ المزيد</span>
          <ArrowLeft className="mr-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

const NewsItem: React.FC<NewsItemProps> = ({
  title,
  excerpt,
  date,
  link
}) => {
  return (
    <div className="border-b border-gray-200 pb-4 mb-4 last:border-0">
      <div className="flex items-center text-gray-500 text-sm mb-2">
        <Calendar className="h-4 w-4 me-1" />
        <span>{date}</span>
      </div>
      <h3 className="text-lg font-bold mb-2">
        <Link to={link} className="hover:text-primary transition-colors duration-200">
          {title}
        </Link>
      </h3>
      <p className="text-gray-600 mb-3 line-clamp-2">{excerpt}</p>
      <Link 
        to={link} 
        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
      >
        اقرأ المزيد
      </Link>
    </div>
  );
};

const LatestNews: React.FC = () => {
  const featuredNews = newsItems.find(item => item.featured);
  const otherNews = newsItems.filter(item => !item.featured);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="أحدث الأخبار"
          subtitle="آخر الأخبار والمستجدات المتعلقة بالشيخ علي بن حاج"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredNews && (
            <div className="lg:col-span-2">
              <FeaturedNewsItem {...featuredNews} />
            </div>
          )}
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">آخر الأخبار</h3>
            <div className="space-y-6">
              {otherNews.slice(0, 3).map((item, index) => (
                <NewsItem key={index} {...item} />
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link 
                to="/news" 
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
              >
                <span>عرض جميع الأخبار</span>
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
