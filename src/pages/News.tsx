
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface NewsItemProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const newsItems: NewsItemProps[] = [
  {
    id: 1,
    title: "الشيخ علي بن حاج يلقي محاضرة في الملتقى الدولي للفكر الإسلامي",
    excerpt: "شارك الشيخ علي بن حاج في الملتقى الدولي للفكر الإسلامي الذي أقيم في العاصمة وألقى محاضرة بعنوان 'الوسطية في الفكر الإسلامي' حيث تناول فيها مفهوم الوسطية وأهميتها في الإسلام وكيفية تطبيقها في الواقع المعاصر.",
    date: "20 أبريل 2023",
    author: "فريق التحرير",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80",
    category: "نشاطات"
  },
  {
    id: 2,
    title: "إصدار كتاب جديد للشيخ بعنوان 'رؤية إسلامية معاصرة'",
    excerpt: "أعلن الشيخ علي بن حاج عن إصدار كتابه الجديد الذي يناقش القضايا المعاصرة من منظور إسلامي، ويطرح رؤية متكاملة للتعامل مع التحديات التي تواجه الأمة الإسلامية في العصر الحالي.",
    date: "12 أبريل 2023",
    author: "فريق التحرير",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
    category: "إصدارات"
  },
  {
    id: 3,
    title: "الشيخ يشارك في ندوة حول تحديات العالم الإسلامي",
    excerpt: "شارك الشيخ علي بن حاج في ندوة فكرية حول التحديات التي تواجه العالم الإسلامي المعاصر وسبل مواجهتها، وقدم رؤيته حول كيفية النهوض بالأمة الإسلامية وتجاوز التحديات التي تواجهها.",
    date: "5 أبريل 2023",
    author: "فريق التحرير",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
    category: "نشاطات"
  },
  {
    id: 4,
    title: "مقابلة خاصة مع الشيخ حول آخر مؤلفاته",
    excerpt: "أجرت قناة الجزيرة مقابلة خاصة مع الشيخ علي بن حاج للحديث عن آخر مؤلفاته وآرائه حول القضايا المعاصرة، وتناولت المقابلة العديد من الموضوعات المهمة التي تشغل الرأي العام.",
    date: "28 مارس 2023",
    author: "فريق التحرير",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&q=80",
    category: "مقابلات"
  },
  {
    id: 5,
    title: "دورة علمية جديدة للشيخ بعنوان 'أصول الفقه'",
    excerpt: "أعلن الشيخ علي بن حاج عن إطلاق دورة علمية جديدة بعنوان 'أصول الفقه' ستقام في المركز الثقافي الإسلامي، وستتناول الدورة مباحث أصول الفقه وأهميتها في فهم النصوص الشرعية.",
    date: "15 مارس 2023",
    author: "فريق التحرير",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80",
    category: "دورات علمية"
  },
  {
    id: 6,
    title: "الشيخ يستقبل وفدًا من طلاب العلم",
    excerpt: "استقبل الشيخ علي بن حاج وفدًا من طلاب العلم من مختلف الجامعات، وأجاب على أسئلتهم واستفساراتهم حول مختلف القضايا الشرعية والفكرية، وحثهم على طلب العلم والاجتهاد.",
    date: "5 مارس 2023",
    author: "فريق التحرير",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
    category: "نشاطات"
  },
];

const News: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="الأخبار"
            subtitle="آخر الأخبار والمستجدات المتعلقة بالشيخ علي بن حاج"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-navy-100 text-navy-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {item.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 me-1" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    <Link to={`/news/${item.id}`} className="hover:text-primary transition-colors duration-200">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 me-1" />
                      <span>{item.author}</span>
                    </div>
                    <Link 
                      to={`/news/${item.id}`} 
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                    >
                      <span>اقرأ المزيد</span>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination placeholder */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md shadow-sm">
              <a href="#" className="px-3 py-2 bg-white border border-gray-300 text-gray-500 hover:bg-gray-50 rounded-r-md">
                السابق
              </a>
              <a href="#" className="px-3 py-2 bg-primary text-white border border-primary">
                1
              </a>
              <a href="#" className="px-3 py-2 bg-white border border-gray-300 text-gray-500 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="px-3 py-2 bg-white border border-gray-300 text-gray-500 hover:bg-gray-50">
                3
              </a>
              <a href="#" className="px-3 py-2 bg-white border border-gray-300 text-gray-500 hover:bg-gray-50 rounded-l-md">
                التالي
              </a>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
