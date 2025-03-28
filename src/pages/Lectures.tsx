
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { Calendar, Clock, Play, Headphones, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LectureProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  duration: string;
  image: string;
  type: "video" | "audio";
  category: string;
}

const lectures: LectureProps[] = [
  {
    id: 1,
    title: "شرح حديث: إنما الأعمال بالنيات",
    excerpt: "يقدم الشيخ في هذا الدرس شرحًا مفصلاً لحديث النبي صلى الله عليه وسلم: إنما الأعمال بالنيات، ويبين أهمية النية في العبادات والمعاملات.",
    date: "27 فبراير 2023",
    duration: "45 دقيقة",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&q=80",
    type: "video",
    category: "لقاء الجمعة"
  },
  {
    id: 2,
    title: "فقه الزكاة وأحكامها",
    excerpt: "يتناول الشيخ في هذا الدرس أحكام الزكاة وشروطها وأنواعها، ويجيب على الأسئلة الشائعة حول الزكاة، ويبين كيفية حساب زكاة المال والذهب والفضة والأسهم والعقارات.",
    date: "20 فبراير 2023",
    duration: "50 دقيقة",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80",
    type: "audio",
    category: "لقاء الجمعة"
  },
  {
    id: 3,
    title: "أحكام الصيام ومسائل معاصرة",
    excerpt: "يشرح الشيخ في هذا الدرس أحكام الصيام وفضائله وآدابه، ويناقش المسائل المعاصرة المتعلقة بالصيام مثل الفحوصات الطبية والحقن والتحاليل وغيرها.",
    date: "13 فبراير 2023",
    duration: "55 دقيقة",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
    type: "video",
    category: "لقاء الجمعة"
  },
  {
    id: 4,
    title: "تفسير سورة الكهف",
    excerpt: "يقدم الشيخ في هذا الدرس تفسيرًا مفصلاً لسورة الكهف، ويستخرج منها الدروس والعبر، ويربط بين قصصها وواقع المسلمين اليوم.",
    date: "6 فبراير 2023",
    duration: "60 دقيقة",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
    type: "audio",
    category: "دروس التفسير"
  },
  {
    id: 5,
    title: "أخلاق المسلم في التعامل مع غير المسلمين",
    excerpt: "يوضح الشيخ في هذا الدرس آداب وأخلاق المسلم في التعامل مع غير المسلمين، ويبين المنهج الإسلامي في التعايش السلمي مع الآخر، ويستشهد بالنصوص الشرعية والسيرة النبوية.",
    date: "30 يناير 2023",
    duration: "47 دقيقة",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&q=80",
    type: "video",
    category: "لقاء الجمعة"
  },
  {
    id: 6,
    title: "منهج الإسلام في تربية الأبناء",
    excerpt: "يتناول الشيخ في هذا الدرس المنهج الإسلامي في تربية الأبناء، ويقدم نصائح عملية للآباء والأمهات في كيفية تربية الأبناء على القيم الإسلامية الصحيحة.",
    date: "23 يناير 2023",
    duration: "52 دقيقة",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80",
    type: "audio",
    category: "لقاء الجمعة"
  },
];

const Lectures: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="دروس وخطب"
            subtitle="مجموعة من الدروس والخطب والمحاضرات للشيخ علي بن حاج"
          />
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-8">
              <TabsTrigger value="all">الكل</TabsTrigger>
              <TabsTrigger value="video">المرئيات</TabsTrigger>
              <TabsTrigger value="audio">الصوتيات</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {lectures.map((lecture) => (
                  <LectureCard key={lecture.id} lecture={lecture} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="video">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {lectures.filter(l => l.type === "video").map((lecture) => (
                  <LectureCard key={lecture.id} lecture={lecture} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="audio">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {lectures.filter(l => l.type === "audio").map((lecture) => (
                  <LectureCard key={lecture.id} lecture={lecture} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
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

const LectureCard: React.FC<{ lecture: LectureProps }> = ({ lecture }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden group">
        <img 
          src={lecture.image} 
          alt={lecture.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {lecture.type === "video" ? (
            <Play className="h-12 w-12 text-white" />
          ) : (
            <Headphones className="h-12 w-12 text-white" />
          )}
        </div>
        <div className="absolute top-2 left-2 bg-navy-800 text-white text-xs font-medium px-2.5 py-1 rounded flex items-center">
          {lecture.type === "video" ? (
            <>
              <Play className="h-3 w-3 me-1" />
              <span>فيديو</span>
            </>
          ) : (
            <>
              <Headphones className="h-3 w-3 me-1" />
              <span>صوتي</span>
            </>
          )}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-navy-100 text-navy-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {lecture.category}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 me-1" />
            <span>{lecture.date}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold mb-3">
          <Link to={`/lectures/${lecture.id}`} className="hover:text-primary transition-colors duration-200">
            {lecture.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{lecture.excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 me-1" />
            <span>{lecture.duration}</span>
          </div>
          <Link 
            to={`/lectures/${lecture.id}`} 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
          >
            <span>استماع/مشاهدة</span>
            <ArrowLeft className="mr-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lectures;
