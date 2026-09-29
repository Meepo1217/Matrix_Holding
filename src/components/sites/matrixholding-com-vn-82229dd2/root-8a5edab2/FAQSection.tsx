"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    number: "01",
    question: "Matrix Holding là gì và hoạt động trong lĩnh vực nào?",
    answer:
      "Matrix Holding là tập đoàn đầu tư và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam. Chúng tôi hoạt động trong nhiều lĩnh vực bao gồm tư vấn pháp lý, kế toán tài chính, tuyển dụng nhân sự, giải pháp công nghệ, và truyền thông — tất cả được tích hợp trong một hệ sinh thái thống nhất nhằm hỗ trợ doanh nghiệp phát triển toàn diện.",
  },
  {
    id: "faq-2",
    number: "02",
    question: "Matrix Holding có thể hỗ trợ doanh nghiệp tôi như thế nào?",
    answer:
      "Chúng tôi cung cấp giải pháp tích hợp toàn diện từ tư vấn chiến lược, quản trị pháp lý, hỗ trợ tài chính, tuyển dụng nhân sự, đến xây dựng thương hiệu và công nghệ. Mỗi doanh nghiệp thành viên trong hệ sinh thái đảm nhận một vai trò chuyên biệt, đảm bảo bạn nhận được dịch vụ chuyên sâu nhất trong mỗi lĩnh vực.",
  },
  {
    id: "faq-3",
    number: "03",
    question: "Làm thế nào để trở thành đối tác của Matrix Holding?",
    answer:
      "Để trở thành đối tác của Matrix Holding, bạn có thể liên hệ trực tiếp qua trang Liên hệ hoặc đăng ký qua form trực tuyến. Đội ngũ tư vấn của chúng tôi sẽ đánh giá nhu cầu của doanh nghiệp bạn và đề xuất giải pháp phù hợp nhất trong vòng 24–48 giờ làm việc.",
  },
  {
    id: "faq-4",
    number: "04",
    question: "Chi phí sử dụng dịch vụ của Matrix Holding là bao nhiêu?",
    answer:
      "Chi phí được thiết kế linh hoạt theo quy mô và nhu cầu cụ thể của từng doanh nghiệp. Chúng tôi cung cấp gói dịch vụ từ cơ bản đến toàn diện, phù hợp với cả startup lẫn tập đoàn lớn. Vui lòng liên hệ để nhận báo giá chi tiết và tư vấn miễn phí từ chuyên gia của chúng tôi.",
  },
  {
    id: "faq-5",
    number: "05",
    question: "Matrix Holding có hoạt động trên toàn quốc không?",
    answer:
      "Có, Matrix Holding và các doanh nghiệp thành viên hoạt động trên toàn quốc với văn phòng chính tại TP. Hồ Chí Minh và mạng lưới đối tác trải rộng khắp các tỉnh thành. Chúng tôi cũng hỗ trợ tư vấn và cung cấp dịch vụ từ xa qua nền tảng số.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      className="mh-section"
      style={{ backgroundColor: "rgb(241,245,249)" }}
    >
      <div className="mh-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
          {/* Left Column — Image */}
          <div className="relative hidden lg:block">
            <div
              className="overflow-hidden"
              style={{ borderRadius: 24, boxShadow: "0 24px 60px rgba(9,46,86,0.15)" }}
            >
              <Image
                src="/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/faq-illustration.jpg"
                alt="FAQ Matrix Holding"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                style={{ maxHeight: 480 }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-5 shadow-xl"
              style={{ minWidth: 180 }}
            >
              <div className="text-center">
                <p
                  className="font-extrabold"
                  style={{ fontSize: 28, color: "rgb(9,46,86)", lineHeight: 1 }}
                >
                  24/7
                </p>
                <p className="text-slate-500 mt-1" style={{ fontSize: 13 }}>
                  Hỗ trợ khách hàng
                </p>
              </div>
            </div>
          </div>

          {/* Right Column — FAQ */}
          <div>
            <span className="mh-eyebrow">CÂU HỎI THƯỜNG GẶP</span>
            <h2
              className="font-extrabold tracking-tight text-slate-900 mb-8"
              style={{ fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.2 }}
            >
              CÂU HỎI THƯỜNG GẶP VỀ MATRIX HOLDING
            </h2>

            {/* Accordion */}
            <div className="flex flex-col gap-3">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className="overflow-hidden rounded-xl bg-white transition-all duration-200"
                    style={{
                      border: `1.5px solid ${isOpen ? "rgb(9,46,86)" : "rgb(226,232,240)"}`,
                      boxShadow: isOpen
                        ? "0 4px 16px rgba(9,46,86,0.10)"
                        : "none",
                    }}
                  >
                    <button
                      onClick={() => toggle(item.id)}
                      className="flex w-full items-start gap-4 px-5 py-4 text-left transition-colors duration-200"
                      aria-expanded={isOpen}
                      id={`faq-btn-${item.id}`}
                    >
                      <span
                        className="mt-0.5 shrink-0 font-bold"
                        style={{
                          fontSize: 11,
                          color: isOpen ? "rgb(9,46,86)" : "rgb(148,163,184)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {item.number}
                      </span>
                      <span
                        className="flex-1 font-semibold text-slate-900 leading-snug"
                        style={{ fontSize: 15 }}
                      >
                        {item.question}
                      </span>
                      <span className="shrink-0 text-slate-400 mt-0.5">
                        {isOpen ? (
                          <Minus size={16} className="text-[rgb(9,46,86)]" />
                        ) : (
                          <Plus size={16} />
                        )}
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: isOpen ? 300 : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <p
                        className="px-5 pb-5 text-slate-600 leading-relaxed"
                        style={{ fontSize: 14, lineHeight: 1.7 }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
