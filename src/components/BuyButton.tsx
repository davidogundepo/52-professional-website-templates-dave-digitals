
import React from 'react';
import { toast } from '../hooks/use-toast';
import { trackSingleTemplatePurchase, trackBundlePurchase } from '../utils/googleAds';

interface BuyButtonProps {
  templateName: string;
  price: number;
  templateSlug: string;
  bundle?: boolean;
}

const BuyButton: React.FC<BuyButtonProps> = ({ templateName, price, templateSlug, bundle = false }) => {
  // Map of template slugs to their corresponding Stripe payment links
  const stripePaymentLinks: Record<string, string> = {
    // Bundle
    'full-template-bundle': 'https://buy.stripe.com/28E9AS5chaIs3db80j7kc00',
    
    // Individual templates
    'oil-and-gas': 'https://buy.stripe.com/3cI14mdIN03OaFD4O77kc02',
    'higher-education': 'https://buy.stripe.com/7sY14m48dg2MeVT3K37kc03',
    'private-equity': 'https://buy.stripe.com/fZufZgbAF9Eo9Bzbcv7kc04',
    'football-club': 'https://buy.stripe.com/5kQ5kC0W1eYI7treoH7kc05',
    'real-estate-development': 'https://buy.stripe.com/dRmbJ05ch17SeVTgwP7kc06',
    'automotive-manufacturing': 'https://buy.stripe.com/4gMbJ05ch8Ak2974O77kc07',
    'pharmaceutical-company': 'https://buy.stripe.com/3cI00idIN5o8dRPa8r7kc08',
    'healthcare-services': 'https://buy.stripe.com/5kQdR8cEJ6sc3dbdkD7kc09',
    'banking-finance': 'https://buy.stripe.com/9B6bJ0eMR3g0dRPa8r7kc0a',
    'insurance-firm': 'https://buy.stripe.com/dRmbJ0awB5o8fZXa8r7kc0b',
    'telecommunications': 'https://buy.stripe.com/fZu4gycEJ17SeVT1BV7kc0c',
    'it-services': 'https://buy.stripe.com/7sY3cubAFaIsaFD0xR7kc0d',
    'agricultural-business': 'https://buy.stripe.com/bJe5kC8otcQA3db1BV7kc0e',
    'food-processing': 'https://buy.stripe.com/00w8wOcEJaIs5ljgwP7kc0f',
    'retail-store': 'https://buy.stripe.com/5kQ9AS6gl3g07trdkD7kc0g',
    'hospitality-tourism': 'https://buy.stripe.com/bJeeVc48d5o84hf94n7kc0h',
    'aerospace-defense': 'https://buy.stripe.com/8x2aEW5cheYI9Bz6Wf7kc0i',
    'construction-company': 'https://buy.stripe.com/cNidR82055o86pncgz7kc0j',
    'mining-minerals': 'https://buy.stripe.com/7sYeVc349g2MaFD6Wf7kc0k',
    'chemical-manufacturing': 'https://buy.stripe.com/fZudR89sx6sc8xvgwP7kc0l',
    'renewable-energy': 'https://buy.stripe.com/9B628qawBeYIaFD3K37kc0m',
    'entertainment-media': 'https://buy.stripe.com/eVq9AS5ch4k415380j7kc0n',
    'fashion-apparel': 'https://buy.stripe.com/6oU6oGfQV9Eo7tr4O77kc0o',
    'e-commerce': 'https://buy.stripe.com/3cIbJ0gUZ3g0fZX4O77kc0p',
    'logistics-supply-chain': 'https://buy.stripe.com/cNifZgeMR8AkcNLdkD7kc0q',
    'legal-services': 'https://buy.stripe.com/cNidR89sx17ScNL80j7kc0r',
    'management-consulting': 'https://buy.stripe.com/cNi4gybAFeYIaFD2FZ7kc0s',
    'advertising-marketing': 'https://buy.stripe.com/cNi28qbAF6scfZX1BV7kc0t',
    'public-relations-agency': 'https://buy.stripe.com/8x214m7kp3g04hfa8r7kc0u',
    'biotechnology-firm': 'https://buy.stripe.com/4gM8wOawB3g0dRPcgz7kc0v',
    'ai-technology': 'https://buy.stripe.com/aFa00i2056scbJH3K37kc0w',
    'cybersecurity-services': 'https://buy.stripe.com/dRm7sK0W1g2M6pnfsL7kc0x',
    'gaming-esports': 'https://buy.stripe.com/3cI28q2054k4cNLfsL7kc0y',
    'fintech-startup': 'https://buy.stripe.com/cNifZggUZbMw6pn2FZ7kc0z',
    'venture-capital': 'https://buy.stripe.com/00w3cu8ot7wgaFD94n7kc0A',
    'commercial-fishing': 'https://buy.stripe.com/14AbJ0bAF8AkeVTeoH7kc0B',
    'forestry-wood-products': 'https://buy.stripe.com/28EfZgbAF9EocNL4O77kc0C',
    'textile-manufacturing': 'https://buy.stripe.com/8x228qeMR2bWfZX0xR7kc0D',
    'waste-management': 'https://buy.stripe.com/00w28q5ch6scaFD5Sb7kc0E',
    'water-utility': 'https://buy.stripe.com/fZu4gy5chbMwaFDa8r7kc0F',
    'film-production': 'https://buy.stripe.com/7sY4gycEJ03O00Zcgz7kc0G',
    'publishing-company': 'https://buy.stripe.com/3cIeVc5ch6sc7trbcv7kc0H',
    'music-industry': 'https://buy.stripe.com/14A4gy8otg2M7tr2FZ7kc0I',
    'fine-art-auction': 'https://buy.stripe.com/fZu6oG6gl03O6pn80j7kc0J',
    'medical-devices': 'https://buy.stripe.com/cNi28qgUZ2bW7trdkD7kc0K',
    'semiconductor-manufacturing': 'https://buy.stripe.com/5kQaEW0W18Ak6pn0xR7kc0L',
    'consumer-electronics': 'https://buy.stripe.com/00wcN4awB6sccNL6Wf7kc0M',
    'primary-secondary-education': 'https://buy.stripe.com/8x2eVc9sxaIs7tr2FZ7kc0N',
    'shipping-maritime': 'https://buy.stripe.com/aFaeVc205eYI7tr80j7kc0O',
    'precision-manufacturing': 'https://buy.stripe.com/6oUbJ0bAF03O6pn0xR7kc0P',
    'mocktail-bartending': 'https://buy.stripe.com/eVqdR8eMR6scfZX3K37kc0Q',
    'makeup-beauty-studio': 'https://buy.stripe.com/aFacN4bAF5o8153cgz7kc0R'
  };

  const handlePurchase = () => {
    toast({
      title: "Redirecting to payment",
      description: `You'll be redirected to complete your purchase for ${templateName}`,
      duration: 3000,
    });
    
    // Use the correct Stripe payment link for the template
    const paymentLink = stripePaymentLinks[templateSlug];
    
    if (!paymentLink) {
      console.error(`No payment link found for template: ${templateSlug}`);
      toast({
        title: "Error",
        description: "Payment link not found. Please contact support.",
        duration: 5000,
      });
      return;
    }
    
    // Track the purchase conversion for Google Ads
    if (bundle) {
      trackBundlePurchase();
    } else {
      trackSingleTemplatePurchase(templateName);
    }
    
    // Redirect to Stripe checkout
    setTimeout(() => {
      window.location.href = paymentLink;
      
      // After successful payment, Stripe will redirect back to our thank-you page
    }, 1500);
  };

  return (
    <div className="space-y-3">
      <button
        onClick={handlePurchase}
        className="btn-primary w-full py-3 text-lg"
      >
        {bundle ? "Buy Full Bundle - $899" : `Buy Now - $${price}`}
      </button>
      <div className="text-center">
        <span className="text-sm text-green-600 font-medium">
          💰 30-day no-questions-asked refund
        </span>
      </div>
    </div>
  );
};

export default BuyButton;
