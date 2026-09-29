import { Mail, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#061a33] to-[#0a2e5c] pt-[140px] pb-20">
      <div className="mh-container relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left">
            <h4 className="text-[11px] font-bold tracking-widest text-blue-300 uppercase mb-4">
              LIÊN HỆ MATRIX HOLDING
            </h4>
            <h1 className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Cùng kiến tạo những cơ hội hợp tác giá trị.
            </h1>
            <p className="text-blue-100 text-lg max-w-xl mx-auto lg:mx-0">
              Hãy để lại thông tin hoặc liên hệ trực tiếp. Đội ngũ Matrix Holding sẵn sàng trao đổi về nhu cầu, nguồn lực và phương án hợp tác phù hợp.
            </p>
          </div>

          {/* Right Card */}
          <div className="w-full max-w-md lg:w-[400px] shrink-0">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-white/60 text-[11px] font-bold tracking-widest uppercase mb-6">
                KẾT NỐI NHANH
              </h3>
              
              <div className="space-y-6">
                <a href="mailto:matrixholding.support@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Mail className="text-[var(--mh-navy)]" size={20} />
                  </div>
                  <span className="text-white font-bold text-[15px] group-hover:text-blue-300 transition-colors break-all">
                    matrixholding.support@gmail.com
                  </span>
                </a>
                
                <a href="tel:+84964243026" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Phone className="text-[var(--mh-navy)]" size={20} />
                  </div>
                  <span className="text-white font-bold text-[15px] group-hover:text-blue-300 transition-colors">
                    (+84) 964 243 026
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
