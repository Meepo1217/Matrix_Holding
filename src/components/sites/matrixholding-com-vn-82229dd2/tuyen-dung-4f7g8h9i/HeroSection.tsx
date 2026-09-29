import { Search, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#092e56] pt-[180px] pb-24 overflow-hidden">
      
      {/* Radial glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="mh-container relative z-10">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6">
          <ArrowRight size={14} className="text-blue-400" />
          <span>MATRIX HOLDING CAREERS</span>
        </div>

        {/* Title & Subtitle */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-white font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Cơ hội phù hợp cho hành trình tiếp theo của bạn.
          </h1>
          <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl">
            Khám phá các vị trí từ Matrix Holding và những doanh nghiệp trong hệ sinh thái đối tác.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-4xl bg-white p-2 rounded-full flex flex-col sm:flex-row items-center gap-2 shadow-2xl mb-8">
          <div className="flex-1 flex items-center gap-3 px-6 py-3 w-full">
            <Search className="text-slate-400 shrink-0" size={24} />
            <input 
              type="text" 
              placeholder="Tìm vị trí, công ty hoặc phòng ban"
              className="w-full bg-transparent border-none outline-none text-slate-700 text-lg placeholder:text-slate-400"
            />
          </div>
          <button className="w-full sm:w-auto bg-[#e5b344] hover:bg-[#d4a233] text-[var(--mh-navy)] font-bold text-[15px] px-10 py-4 rounded-full transition-colors flex items-center justify-center gap-2 shrink-0">
            Tìm việc <ArrowRight size={18} />
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-8 text-white/90 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xl text-white">13</span>
            <span>vị trí đang tuyển</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xl text-white">5</span>
            <span>doanh nghiệp trên trang</span>
          </div>
        </div>

      </div>
    </section>
  );
}
