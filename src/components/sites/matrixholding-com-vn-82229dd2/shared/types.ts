// Matrix Holding — shared TypeScript interfaces
// Site key: matrixholding-com-vn-82229dd2

export interface NavLink {
  label: string;
  href: string;
}

export interface EcosystemCard {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt?: string;
  date: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export type CompanyCategory =
  | "Tất cả"
  | "Pháp lý"
  | "Tài chính"
  | "Vận hành"
  | "Nhân sự"
  | "Kinh doanh"
  | "Truyền thông"
  | "Công nghệ";

export interface CompanyCard {
  id: string;
  name: string;
  category: CompanyCategory;
  description: string;
  logoSrc?: string;
  href: string;
  jobCount: number;
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}
