
// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const trackSingleTemplatePurchase = (templateName?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      'transaction_id': 'template_' + Date.now(),
      'value': 39,
      'currency': 'USD',
      'items': [{
        'item_id': 'single_template',
        'item_name': templateName ? `Website Template - ${templateName}` : 'Website Template',
        'category': 'Digital Product',
        'quantity': 1,
        'price': 39
      }]
    });
    console.log('Google Ads: Single template purchase tracked ($39)');
  }
};

export const trackBundlePurchase = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      'transaction_id': 'bundle_' + Date.now(),
      'value': 1499,
      'currency': 'USD',
      'items': [{
        'item_id': 'template_bundle',
        'item_name': '52 Website Templates Bundle',
        'category': 'Digital Product',
        'quantity': 1,
        'price': 1499
      }]
    });
    console.log('Google Ads: Bundle purchase tracked ($1,499)');
  }
};
