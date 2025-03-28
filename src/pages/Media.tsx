
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { Calendar, Play, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MediaItemProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: "interviews" | "channel" | "feast" | "funeral" | "tv" | "clips";
  views: number;
}

const mediaItems: MediaItemProps[] = [
  {
    id: 1,
    title: "حوار الشيخ مع قناة الجزيرة حول قضايا الأمة",
    excerpt: "حوار شامل مع الشيخ علي بن حاج على قناة الجزيرة يتناول فيه أبرز القضايا التي تهم الأمة الإسلامية وسبل النهوض بها.",
    date: "25 أبريل 2023",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&q=80",
    category: "interviews",
    views: 1250
  },
  {
    id: 2,
    title: "البرنامج الأسبوعي: مفاهيم إسلامية",
    excerpt: "الحلقة الجديدة من البرنامج الأسبوعي 'مفاهيم إسلامية' على قناة الهيئة الإعلامية، يتناول فيها الشيخ مفهوم الوسطية في الإسلام.",
    date: "20 أبريل 2023",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80",
    category: "channel",
    views: 980
  },
  {
    id: 3,
    title: "كلمة الشيخ في حفل زفاف",
    excerpt: "كلمة توجيهية للشيخ علي بن حاج في حفل زفاف، يقدم فيها نصائح للزوجين الجديدين حول بناء أسرة إسلامية ناجحة.",
    date: "15 أبريل 2023",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
    category: "feast",
    views: 845
  },
  {
    id: 4,
    title: "موعظة في جنازة الشيخ عبد الرحمن",
    excerpt: "كلمة مؤثرة للشيخ علي بن حاج في جنازة الشيخ عبد الرحمن، يذكر فيها بالموت وأهمية الاستعداد له، ويعدد مناقب الفقيد.",
    date: "10 أبريل 2023",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
    category: "funeral",
    views: 760
  },
  {
    id: 5,
    title: "لقاء تلفزيوني حول التحديات التي تواجه الشباب",
    excerpt: "مداخلة تلفزيونية للشيخ علي بن حاج على قناة النهار يتحدث فيها عن التحديات التي تواجه الشباب وكيفية مواجهتها من منظور إسلامي.",
    date: "5 أبريل 2023",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&q=80",
    category: "tv",
    views: 1100
  },
  {
    id: 6,
    title: "مقتطفات من دروس الشيخ حول الإيمان",
    excerpt: "مجموعة مختارة من أبرز مقتطفات دروس الشيخ علي بن حاج حول موضوع الإيمان وأثره في حياة المسلم.",
    date: "1 أبريل 2023",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80",
    category: "clips",
    views: 1520
  },
];

const categoryLabels = {
  interviews: "حــوارات الشـيخ",
  channel: "قناة الهيئة الاعلامية",
  feast: "كلمة في وليمة",
  funeral: "موعظة في جنازة",
  tv: "المداخلات التلفزيونية",
  clips: "مقتطفات مع الشيخ"
};

const Media: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="وسائط متعددة"
            subtitle="مجموعة متنوعة من الوسائط المرئية والمسموعة للشيخ علي بن حاج"
          />
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-8 flex flex-wrap">
              <TabsTrigger value="all">الكل</TabsTrigger>
              <TabsTrigger value="interviews">حوارات الشيخ</TabsTrigger>
              <TabsTrigger value="channel">قناة الهيئة</TabsTrigger>
              <TabsTrigger value="feast">كلمة في وليمة</TabsTrigger>
              <TabsTrigger value="funeral">موعظة في جنازة</TabsTrigger>
              <TabsTrigger value="tv">المداخلات التلفزيونية</TabsTrigger>
              <TabsTrigger value="clips">مقتطفات</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mediaItems.map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
            
            {Object.keys(categoryLabels).map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {mediaItems
                    .filter(item => item.category === category)
                    .map((item) => (
                      <MediaCard key={item.id} item={item} />
                    ))}
                </div>
              </TabsContent>
            ))}
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

const MediaCard: React.FC<{ item: MediaItemProps }> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden group">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Play className="h-12 w-12 text-white" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {`${item.views} مشاهدة`}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-navy-100 text-navy-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {categoryLabels[item.category]}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 me-1" />
            <span>{item.date}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold mb-3">
          <Link to={`/media/${item.category}/${item.id}`} className="hover:text-primary transition-colors duration-200">
            {item.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{item.excerpt}</p>
        <div className="flex justify-end">
          <Link 
            to={`/media/${item.category}/${item.id}`} 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
          >
            <span>مشاهدة</span>
            <ArrowLeft className="mr-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Media;
