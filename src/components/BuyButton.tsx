
import React from 'react';
import { toast } from '../hooks/use-toast';

interface BuyButtonProps {
  templateName: string;
  price: number;
  templateSlug: string;
  bundle?: boolean;
}

const BuyButton: React.FC<BuyButtonProps> = ({ templateName, price, templateSlug, bundle = false }) => {
  // This would be replaced with actual Stripe price IDs in a production environment
  const getStripePriceId = (templateSlug: string) => {
    // In a real implementation, you'd have a mapping of all template slugs to their Stripe price IDs
    // For now, we'll just handle the two specified templates
    switch (templateSlug) {
      case 'oil-and-gas-website-template':
        return 'price_example123'; // Replace with actual Stripe price ID
      case 'higher-education-website-template':
        return 'price_example456'; // Replace with actual Stripe price ID
      default:
        return 'price_default789'; // A default price ID for testing
    }
  };

  const handlePurchase = () => {
    // For all purchases, we're now using the provided Stripe link
    toast({
      title: "Redirecting to payment",
      description: `You'll be redirected to complete your purchase for ${templateName}`,
      duration: 3000,
    });
    
    // Redirect to Stripe checkout
    setTimeout(() => {
      window.location.href = "https://buy.stripe.com/6oU00i8ot2bW4hf94n7kc01";
      
      // After successful payment, Stripe will redirect back to our thank-you page
      // This is handled by the Stripe configuration (success_url)
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
