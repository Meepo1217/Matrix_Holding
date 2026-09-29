"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

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
  const reduce = useReducedMotion();

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mh-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left Column — Image */}
          <motion.div 
            className="relative hidden lg:block"
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-slate-200 aspect-[3/4]">
              <Image
                src="/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/faq-illustration.jpg"
                alt="FAQ Matrix Holding"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, ease: "backOut" }}
              className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(9,46,86,0.12)] min-w-[200px]"
            >
              <div className="text-center">
                <p className="font-extrabold text-[var(--mh-navy)] text-4xl leading-none tracking-tight">
                  24/7
                </p>
                <p className="text-slate-500 mt-2 text-sm font-semibold uppercase tracking-wider">
                  Hỗ trợ khách hàng
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — FAQ */}
          <motion.div
            variants={container}
            initial={reduce ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={itemAnim}
              className="font-extrabold tracking-tight text-slate-900 mb-10 text-3xl md:text-4xl lg:text-5xl max-w-[20ch] leading-[1.1]"
            >
              Giải đáp thắc mắc về Matrix Holding
            </motion.h2>

            {/* Accordion */}
            <div className="flex flex-col gap-4">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <motion.div
                    variants={itemAnim}
                    key={item.id}
                    className={`overflow-hidden rounded-2xl bg-white transition-all duration-300 border-2 ${
                      isOpen ? "border-[var(--mh-navy)] shadow-[0_8px_24px_rgba(9,46,86,0.08)]" : "border-slate-100 hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => toggle(item.id)}
                      className="flex w-full items-start gap-4 px-6 py-5 text-left transition-colors duration-200 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`mt-1 shrink-0 font-extrabold text-sm tracking-widest transition-colors ${
                          isOpen ? "text-[var(--mh-navy)]" : "text-slate-400"
                        }`}
                      >
                        {item.number}
                      </span>
                      <span
                        className={`flex-1 font-bold text-base md:text-lg leading-snug transition-colors ${
                          isOpen ? "text-[var(--mh-navy)]" : "text-slate-800"
                        }`}
                      >
                        {item.question}
                      </span>
                      <span className={`shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "text-[var(--mh-navy)] rotate-180" : "text-slate-400"}`}>
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" as const }}
                        >
                          <div className="px-6 pb-6 pt-2 pl-[4.25rem]">
                            <p className="text-slate-600 leading-relaxed text-[15px] md:text-base">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
