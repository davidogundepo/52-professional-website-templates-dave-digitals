
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
    const priceId = getStripePriceId(templateSlug);
    
    // In a real implementation, this would call your backend to create a Stripe checkout session
    toast({
      title: "Redirecting to payment",
      description: `You'll be redirected to complete your purchase for ${templateName}`,
      duration: 3000,
    });
    
    // Simulate redirecting to Stripe Checkout
    // In production, this would be an actual API call to your backend
    setTimeout(() => {
      // This is simulating the redirect - in production we'd redirect to the Stripe Checkout URL
      window.location.href = `/thank-you/${templateSlug}`; 
      
      // In production with an actual Stripe integration, this would be:
      // window.location.href = checkoutSession.url;
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
