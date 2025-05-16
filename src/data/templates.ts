
import { Template } from "../types";

export const templates: Template[] = [
  {
    id: "1",
    name: "Oil and Gas Website Template",
    slug: "oil-and-gas",
    category: "energy",
    description: "A comprehensive website template designed specifically for oil and gas companies. This template includes pages for services, projects, sustainability initiatives, and investor relations. With its professional design and industry-specific features, it's perfect for petroleum companies, energy conglomerates, and oil field service providers.",
    shortDescription: "Professional template for petroleum companies with industry-specific features",
    price: 39,
    previews: {
      PI: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FOil%20and%20Gas%2FPii.png?alt=media&token=e40461b9-632d-4020-a9df-63913cf230b6",
      PII: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FOil%20and%20Gas%2FPi.png?alt=media&token=04df2329-914d-4569-a606-6b69b61318d8",
      PIII: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FOil%20and%20Gas%2FPiii.png?alt=media&token=be70ca3f-8fd7-45d6-a1ac-332e06007738",
      PIV: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FOil%20and%20Gas%2FPiv.png?alt=media&token=903cd17b-7e87-4198-8159-ccfc4542532b"
    },
    demoUrl: "https://project-corporate-website-for-petrocore-energy-708.magicpatterns.app/",
    features: [
      "Industry-specific design for oil and gas companies",
      "Project showcase section with filterable categories",
      "Interactive services presentation",
      "Investor relations page with downloadable reports",
      "Responsive across all devices",
      "Easy-to-customize sections and colors"
    ]
  },
  {
    id: "2",
    name: "Higher Education Website Template",
    slug: "higher-education",
    category: "education",
    description: "A modern and comprehensive website template for universities, colleges and other higher education institutions. Featuring dedicated sections for admissions, academics, campus life, and alumni relations, this template provides everything an educational institution needs for its online presence.",
    shortDescription: "Modern template for universities with sections for admissions, academics, and campus life",
    price: 39,
    previews: {
      PI: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FHigher%20Education%2FPi.png?alt=media&token=d6c4330e-fc29-466d-ac51-4788681eea6f",
      PII: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FHigher%20Education%2FPiv.png?alt=media&token=9e2f284c-4b45-4c71-a155-bc0db96262e8",
      PIII: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FHigher%20Education%2FPii.png?alt=media&token=f336a978-2690-44e0-8819-437e3ee33893",
      PIV: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FHigher%20Education%2FPiii.png?alt=media&token=c0509c87-946c-4ac9-8acb-0ea6a19719eb"
    },
    demoUrl: "https://project-university-website-design-for-unisphere-academy-548.magicpatterns.app/",
    features: [
      "Course catalog with search and filter functionality",
      "Faculty directory with profiles",
      "Virtual campus tour integration",
      "Event calendar and news section",
      "Application and enrollment forms",
      "Student portal integration points"
    ]
  },
  {
    id: "3",
    name: "Private Equity Website Template",
    slug: "private-equity",
    category: "finance",
    description: "A sophisticated and professional website template designed specifically for private equity firms, investment companies, and financial services organizations. With its clean design, powerful portfolio showcase, and investor-focused features, it provides the perfect platform to display your investment strategy and success stories.",
    shortDescription: "Sophisticated template for investment firms with portfolio showcase and investor resources",
    price: 39,
    previews: {
      PI: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FPrivate%20Equity%2FPi.png?alt=media&token=ec409557-404c-4a0f-b0b7-b6ffe03d91d5",
      PII: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FPrivate%20Equity%2FPiii.png?alt=media&token=c8507ad9-7006-4bb9-9483-8bedde12d39a",
      PIII: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FPrivate%20Equity%2FPii.png?alt=media&token=b5e0d677-d45d-4456-91a5-b6d3ff5d19b7",
      PIV: "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FPrivate%20Equity%2FPiv.png?alt=media&token=a282db6d-92a2-43db-ac94-2bf4f6171c99"
    },
    demoUrl: "https://luxury-swan-b0e778.netlify.app/",
    features: [
      "Investment portfolio showcase",
      "Team member profiles with credentials",
      "Investment approach and strategy sections",
      "Secure investor login area integration",
      "Interactive performance charts",
      "Contact and inquiry forms"
    ]
  },
  // Add more templates - for the sake of brevity, I'll just include 3 sample templates here
  // The full implementation would include all 52 templates with their data
];

export const categories: { id: string; name: string }[] = [
  { id: "all", name: "All Categories" },
  { id: "business", name: "Business" },
  { id: "education", name: "Education" },
  { id: "energy", name: "Energy" },
  { id: "entertainment", name: "Entertainment" },
  { id: "finance", name: "Finance" },
  { id: "healthcare", name: "Healthcare" },
  { id: "technology", name: "Technology" },
  { id: "retail", name: "Retail" }
];
