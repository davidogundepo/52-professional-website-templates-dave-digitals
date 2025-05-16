
import React from 'react';
import { toast } from '../hooks/use-toast';

interface BuyButtonProps {
  templateName: string;
  price: number;
  bundle?: boolean;
}

const BuyButton: React.FC<BuyButtonProps> = ({ templateName, price, bundle = false }) => {
  const handlePurchase = () => {
    // In a real implementation, this would connect to the Stripe API
    console.log(`Processing purchase for ${templateName} at $${price}`);
    
    // For now, we'll just show a success message
    toast({
      title: "Processing payment",
      description: `Your purchase of ${templateName} is being processed. Please wait...`,
      duration: 3000,
    });
    
    // Simulate a successful payment after 3 seconds
    setTimeout(() => {
      toast({
        title: "Purchase successful!",
        description: bundle 
          ? "Thank you for purchasing the complete template bundle! You can now download all templates." 
          : `Thank you for purchasing ${templateName}! You can now download your template.`,
        duration: 5000,
      });
    }, 3000);
  };

  return (
    <button
      onClick={handlePurchase}
      className="btn-primary w-full py-3 text-lg mb-4"
    >
      {bundle ? "Buy Full Bundle - $129" : `Buy Now - $${price}`}
    </button>
  );
};

export default BuyButton;
