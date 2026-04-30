import { FaEnvelope, FaWhatsapp } from "react-icons/fa6";

export default function MobileCTA() {
  return (
    <div
      className="
      fixed bottom-0 left-0 right-0 z-50
      md:hidden
      bg-white/90 dark:bg-gray-900/90
      backdrop-blur-lg
      border-t border-gray-200 dark:border-gray-800
      px-6 py-4
      shadow-2xl
      "
    >
      <div className="flex justify-between items-center gap-4 max-w-md mx-auto">
        
        {/* Email Button */}
        <a
          href="mailto:jeffersongithinji@gmail.com"
          className="
          flex-1 text-center py-3 rounded-xl
          bg-gradient-to-r from-blue-600 to-purple-600
          text-white font-semibold
          shadow-lg hover:scale-105
          transition-all duration-300
          "
        >
          <span className="flex justify-center items-center gap-2">
            <FaEnvelope />
            Hire Me
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/message/H45TAWKQS3QLM1"
          target="_blank"
          rel="noopener noreferrer"
          className="
          flex-1 text-center py-3 rounded-xl
          bg-green-500
          text-white font-semibold
          shadow-lg hover:scale-105
          transition-all duration-300
          "
        >
          <span className="flex justify-center items-center gap-2">
            <FaWhatsapp />
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}