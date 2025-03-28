
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const articles: ArticleProps[] = [
  {
    id: 1,
    title: "دور العلماء في إصلاح المجتمع",
    excerpt: "يناقش الشيخ في هذا المقال الدور الهام الذي يلعبه العلماء في إصلاح المجتمع والنهوض به من خلال نشر العلم والوعي والقيم الإسلامية الصحيحة، ومواجهة التحديات المعاصرة التي تهدد هوية الأمة وقيمها.",
    date: "15 أبريل 2023",
    readTime: "10 دقائق",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80",
    category: "فكر إسلامي"
  },
  {
    id: 2,
    title: "الوسطية في الفكر الإسلامي",
    excerpt: "يتناول الشيخ في هذا المقال مفهوم الوسطية في الإسلام وأهميتها في تحقيق التوازن في حياة المسلم، ويوضح كيف أن الوسطية هي منهج الإسلام في جميع جوانب الحياة، ويحذر من الغلو والتطرف.",
    date: "10 أبريل 2023",
    readTime: "8 دقائق",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
    category: "فكر إسلامي"
  },
  {
    id: 3,
    title: "أهمية العلم في حياة المسلم",
    excerpt: "يؤكد الشيخ في هذا المقال على أهمية العلم في حياة المسلم، ويستعرض الآيات والأحاديث التي تحث على طلب العلم، ويبين كيف أن العلم هو أساس النهضة والتقدم، ويدعو إلى إحياء ثقافة العلم في المجتمع.",
    date: "5 أبريل 2023",
    readTime: "12 دقيقة",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
    category: "تربية وتعليم"
  },
  {
    id: 4,
    title: "التحديات المعاصرة للأسرة المسلمة",
    excerpt: "يناقش الشيخ في هذا المقال التحديات التي تواجه الأسرة المسلمة في العصر الحالي، ويقدم رؤية إسلامية للتعامل مع هذه التحديات، ويؤكد على أهمية الأسرة في بناء المجتمع وحمايته من الانحراف.",
    date: "1 أبريل 2023",
    readTime: "15 دقيقة",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&q=80",
    category: "قضايا اجتماعية"
  },
  {
    id: 5,
    title: "الإصلاح السياسي في ضوء المنهج الإسلامي",
    excerpt: "يستعرض الشيخ في هذا المقال مفهوم الإصلاح السياسي في ضوء المنهج الإسلامي، ويبين أسس الحكم الرشيد في الإسلام، ويناقش قضايا الشورى والعدل والحرية والمساواة، ويدعو إلى تطبيق المنهج الإسلامي في الإصلاح السياسي.",
    date: "25 مارس 2023",
    readTime: "18 دقيقة",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80",
    category: "سياسة شرعية"
  },
  {
    id: 6,
    title: "التربية الإيمانية للأبناء",
    excerpt: "يقدم الشيخ في هذا المقال منهجا متكاملا للتربية الإيمانية للأبناء، ويوضح دور الوالدين في غرس القيم الإسلامية في نفوس الأبناء، ويقدم نصائح عملية للآباء والأمهات في كيفية تربية الأبناء على الإيمان والأخلاق.",
    date: "20 مارس 2023",
    readTime: "14 دقيقة",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
    category: "تربية وتعليم"
  },
];

const Articles: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="مقالات الشيخ"
            subtitle="مجموعة من المقالات الفكرية والتربوية للشيخ علي بن حاج"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row card-hover">
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-navy-100 text-navy-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 me-1" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    <Link to={`/articles/${article.id}`} className="hover:text-primary transition-colors duration-200">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 me-1" />
                      <span>{article.readTime}</span>
                    </div>
                    <Link 
                      to={`/articles/${article.id}`} 
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                    >
                      <span>اقرأ المقال</span>
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

export default Articles;
