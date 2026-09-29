export default function BrandPositioning() {
  return (
    <section className="mh-section bg-white">
      <div className="mh-container max-w-4xl">
        <div className="mb-4">
          <span className="mh-eyebrow !text-blue-500">ĐỊNH VỊ THƯƠNG HIỆU</span>
        </div>
        <h2 
          className="font-extrabold text-[var(--mh-navy)] leading-[1.3] mb-8"
          style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
        >
          “Là thương hiệu tiên phong trong lĩnh vực tư vấn, đầu tư và phát triển hệ sinh thái kinh doanh đa ngành.”
        </h2>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
          Matrix Holding định vị bản thân là đơn vị kiến tạo và phát triển hệ sinh thái kinh doanh trong nhiều lĩnh vực khác nhau thông qua các dự án, mô hình kinh doanh hiệu quả và tối ưu.
        </p>
      </div>
    </section>
  );
}
