
import React from 'react';
import { toast } from '../hooks/use-toast';

interface BuyButtonProps {
  templateName: string;
  price: number;
  templateSlug: string;
  bundle?: boolean;
}

const BuyButton: React.FC<BuyButtonProps> = ({ templateName, price, templateSlug, bundle = false }) => {
  const handlePurchase = () => {
    toast({
      title: "Redirecting to payment",
      description: `You'll be redirected to complete your purchase for ${templateName}`,
      duration: 3000,
    });
    
    // Redirect to Stripe checkout
    setTimeout(() => {
      window.location.href = "https://buy.stripe.com/6oU00i8ot2bW4hf94n7kc01";
      
      // After successful payment, Stripe will redirect back to our thank-you page
    }, 1500);
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
