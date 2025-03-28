
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold-500">الشيخ علي بن حاج</h3>
            <p className="mb-4 text-gray-300">
              مفكر وعالم وداعية إسلامي جزائري، من أبرز الشخصيات الإسلامية المعاصرة.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a
                href="#"
                className="bg-navy-800 p-2 rounded-full hover:bg-gold-500 transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-navy-800 p-2 rounded-full hover:bg-gold-500 transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-navy-800 p-2 rounded-full hover:bg-gold-500 transition-colors duration-300"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="bg-navy-800 p-2 rounded-full hover:bg-gold-500 transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold-500">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gold-500 transition-colors duration-200">
                  الصفحة الرئيسة
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-gold-500 transition-colors duration-200">
                  الأخـبـــار
                </Link>
              </li>
              <li>
                <Link to="/articles" className="hover:text-gold-500 transition-colors duration-200">
                  مقالات الشيخ
                </Link>
              </li>
              <li>
                <Link to="/lectures" className="hover:text-gold-500 transition-colors duration-200">
                  دروس و خـطب
                </Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-gold-500 transition-colors duration-200">
                  وسائط متعددة
                </Link>
              </li>
              <li>
                <Link to="/books" className="hover:text-gold-500 transition-colors duration-200">
                  مؤلفات الشـيخ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold-500">اتصل بنا</h3>
            <p className="mb-2">البريد الإلكتروني: info@binhadj.com</p>
            <p className="mb-4">الهاتف: +213 000 000 000</p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="px-4 py-2 rounded-r-md w-full focus:outline-none text-navy-900"
                />
                <button
                  type="submit"
                  className="bg-gold-500 text-navy-900 px-4 py-2 rounded-l-md hover:bg-gold-600 transition-colors duration-300"
                >
                  اشتراك
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-10 pt-6 text-center text-gray-400">
          <p>جميع الحقوق محفوظة &copy; {currentYear} - الشيخ علي بن حاج</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
