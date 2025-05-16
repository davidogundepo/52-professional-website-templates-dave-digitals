
export interface Template {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  shortDescription: string;
  price: number;
  previews: {
    PI: string;
    PII: string;
    PIII: string;
    PIV: string;
  };
  demoUrl?: string;
  features: string[];
}

export type Category = {
  id: string;
  name: string;
}
