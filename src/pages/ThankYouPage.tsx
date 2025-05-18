
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { templates } from '../data/templates';
import { Template } from '../types';
import { Helmet } from 'react-helmet-async';

const ThankYouPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [template, setTemplate] = useState<Template | null>(null);
  const [downloadStarted, setDownloadStarted] = useState(false);

  useEffect(() => {
    const foundTemplate = templates.find(t => t.slug === slug);
    setTemplate(foundTemplate || null);
    
    // Auto-download after 3 seconds
    const timer = setTimeout(() => {
      if (foundTemplate) {
        initiateDownload();
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [slug]);

  const getDownloadLink = (templateSlug: string) => {
    // Map template slugs to download links
    const downloadLinks: Record<string, string> = {
      // Bundle
      'full-template-bundle': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2F52%20Websites%20Pack.zip?alt=media&token=da1719d2-5a26-4eb6-8a98-289f823722fb',
      
      // Individual templates
      'oil-and-gas': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-1-oil-and-gas.zip?alt=media&token=1fbc9f29-0ffa-4b29-a65e-3eb2337fc217',
      'higher-education': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-2-higher-education.zip?alt=media&token=4f4ee3e1-8422-4069-a535-674b55eddf13',
      'private-equity': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-3-private-equity.zip?alt=media&token=74f70f16-c8d5-4b6a-bbdd-701d1e9d1f68',
      'football-club': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-4-sports-football.zip?alt=media&token=75c1fac4-488c-487e-b562-4327dd6dacaf',
      'real-estate': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-5-real-estate.zip?alt=media&token=b379424a-a8d5-4bec-b030-8e56b9d05dbe',
      'automotive': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-6-automotive.zip?alt=media&token=46e104be-cb52-4fc0-81bd-c323522bffab',
      'pharmaceutical': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-7-pharmaceuticals.zip?alt=media&token=f6286320-4c4f-4d41-91ae-336c33f7709c',
      'healthcare': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-8-healthcare.zip?alt=media&token=ae88fccf-dc21-4722-ab6c-4107569bd6ed',
      'banking': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-9-finance.zip?alt=media&token=f0b329a0-1836-4ab4-9baf-30e14ec99be9',
      'insurance': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-10-insurance.zip?alt=media&token=f8d097f5-ac96-4ea4-95a3-384021787070',
      'telecom': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-11-telecoms.zip?alt=media&token=721a6e1f-6343-434f-bd3d-90bc237af120',
      'it-services': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-12-software-it.zip?alt=media&token=b4f6a78c-4ac8-4c9f-8faa-0a3dc893c80a',
      'agriculture': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-13-agriculture.zip?alt=media&token=d72a3357-c468-4c30-b8c4-df6bf90df1be',
      'food-processing': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-14-food-processing.zip?alt=media&token=28c8d989-5ce7-43ec-884b-ae026124792a',
      'retail': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-15-retail-fashion.zip?alt=media&token=0bccda3a-8d6f-4e0d-a428-302d58adcc6b',
      'hospitality': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-16-hospitality.zip?alt=media&token=499bb0d2-5d23-4b2e-b958-6f2a36a8259b',
      'aerospace': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-17-aerospace.zip?alt=media&token=b1be3af2-c0a4-4deb-85d8-3532a1aa1ed5',
      'construction': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-18-construction.zip?alt=media&token=407682cb-6c81-44d3-898e-b906c4e32a53',
      'mining': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-19-mining.zip?alt=media&token=b156a2e3-02fc-4ab6-a3de-f0c9f12878cf',
      'chemical': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-20-chemicals.zip?alt=media&token=a482437a-9d1c-4fa5-9e6c-bb94a88e52f6',
      'renewable-energy': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-21-renewable-energy.zip?alt=media&token=098b000a-389d-4b04-9dbf-d4b297fe8cce',
      'media': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-22-media.zip?alt=media&token=62a03489-9fb1-44e4-baa5-3479952a0d61',
      'fashion': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-23-fashion.zip?alt=media&token=b126b830-1316-4d18-a2e5-b6b7d8098932',
      'ecommerce': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-24-ecommerce.zip?alt=media&token=14a225b4-fd70-438e-8f5a-16c88da5a546',
      'logistics': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-25-logistics.zip?alt=media&token=c90eb78c-d8b9-440c-8fb7-5fb98bbc8b5a',
      'legal': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-26-legal.zip?alt=media&token=99965e5c-69ca-462b-8105-75da14c2775a',
      'consulting': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-27-consulting.zip?alt=media&token=e0ab3431-048f-4d09-b3a5-3fe810ea2b67',
      'marketing': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-28-marketing.zip?alt=media&token=a41816d8-8492-4021-a576-e40a820d8409',
      'pr-agency': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-29-pr.zip?alt=media&token=fd0e5acd-0718-4505-8065-146b58cdab7c',
      'biotech': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-30-biotech.zip?alt=media&token=03f16840-a249-4681-bee5-950d0f78d968',
      'ai-tech': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-31-ai-robotics.zip?alt=media&token=63b099d8-6c51-42c8-9205-899f04ed9c09',
      'cybersecurity': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-32-cybersecurity.zip?alt=media&token=2e8c857f-813c-4e19-9db6-d3a290e3d3a3',
      'gaming': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-33-gaming.zip?alt=media&token=73c64719-cc4e-4658-a9c6-bb042f0a0891',
      'fintech': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-34-fintech.zip?alt=media&token=d4c111a0-6fa2-4475-9ea1-58d312abda83',
      'venture-capital': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-35-venture-capital.zip?alt=media&token=fba95502-8083-4bf0-8eb1-544a12de79f2',
      'fishing': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-36-fishing.zip?alt=media&token=ae75d464-4784-4e9e-9a67-e10f8cfc3d5a',
      'forestry': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-37-forestry.zip?alt=media&token=42ecba07-076e-4da6-9ece-883e5043a8ed',
      'textile': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-38-textiles.zip?alt=media&token=418f48f2-58fa-4619-94c1-88d20a92803b',
      'waste-management': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-39-waste-management.zip?alt=media&token=02745fd2-51c5-4e16-bc8c-1bc5dcec61bf',
      'water-utility': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-40-water-utility.zip?alt=media&token=793a5a4f-6810-4466-bb53-4bfab8690db0',
      'film-production': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-41-film-production.zip?alt=media&token=07e46b75-adc1-4652-b447-3385abc7aeae',
      'publishing': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-42-publishing.zip?alt=media&token=651ad040-ed70-4712-97f6-f28cd8e33796',
      'music': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-43-music.zip?alt=media&token=78f78016-fb03-470c-be9b-cc1ccf47bc2b',
      'art-auction': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-44-art-auctions.zip?alt=media&token=fb8c7544-6329-4fca-988a-23fe1b194756',
      'medical-devices': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-45-med-devices.zip?alt=media&token=d38d983a-41cc-4b20-b70a-4629ed1fb017',
      'semiconductor': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-46-semiconductors.zip?alt=media&token=cc009491-0e1c-414f-a58f-922d620cdc7c',
      'electronics': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-47-electronics.zip?alt=media&token=596199f4-69cc-4f0a-b6f2-4b116fc6e4ff',
      'education': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-48-primary-education.zip?alt=media&token=380c4081-4c38-4f54-837c-71220a3ccf61',
      'shipping': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-49-shipping.zip?alt=media&token=0910dcbc-750e-42e0-8d21-d6d8b408181a',
      'precision-manufacturing': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-50-engineering.zip?alt=media&token=4c4b53c5-661e-4aba-906e-a6ef340538cc',
      'mocktail': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-51-mocktail-bartending.zip?alt=media&token=62d6f23f-874c-44ca-83b8-91e7ea04121a',
      'makeup-beauty': 'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/50%20websites%2FZips%20of%20Websites%2Fwebsite-52-makeup-beauty.zip?alt=media&token=80760ad4-5699-4743-ab44-81e3d47e6408'
    };

    // Return the specific download link or a default one if not found
    return downloadLinks[templateSlug] || "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/Project%20Substandard%20Websites%2FUnited%20Kingdom%2F20%2Fwebsite-51-mocktail-bartending.zip?alt=media&token=15841897-d97b-4628-b302-83a51607a2ac";
  };

  const initiateDownload = () => {
    if (template) {
      const downloadLink = getDownloadLink(template.slug);
      const link = document.createElement('a');
      link.href = downloadLink;
      link.setAttribute('download', `${template.slug}.zip`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadStarted(true);
    }
  };

  if (!template) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Purchase</h1>
        <p className="mb-8">We couldn't find specific template information, but your download should begin shortly.</p>
        <Link to="/templates" className="btn-primary">Browse All Templates</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Thank You for Your Purchase - {template.name}</title>
      </Helmet>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 text-green-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You for Your Purchase!</h1>
          <p className="text-xl text-gray-600">
            Your purchase of <span className="font-semibold">{template.name}</span> is complete.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
            <div className="aspect-video w-full md:w-1/3 bg-gray-100 rounded overflow-hidden">
              <img 
                src={template.previews.PI} 
                alt={template.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="font-bold text-xl mb-2">{template.name}</h3>
              <p className="text-gray-600 mb-4">{template.shortDescription}</p>
              <div className="text-lg font-bold text-green-600">${template.price}</div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-bold text-lg mb-4">Download Your Template</h3>
            <p className="mb-4">
              {downloadStarted 
                ? "Your download has been initiated. If it doesn't start automatically, click the button below:"
                : "Your download should start automatically in a few seconds. If it doesn't, click the button below:"}
            </p>
            <button
              onClick={initiateDownload}
              className="btn-primary px-8 py-3 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Template
            </button>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-4">What's Next?</h3>
          <ol className="list-decimal pl-5 space-y-3">
            <li>Extract the downloaded ZIP file to a location of your choice.</li>
            <li>Open the files using a code editor like VS Code.</li>
            <li>Follow the included README.md file for detailed instructions.</li>
            <li>Replace the placeholder content with your own text and images.</li>
          </ol>
          <div className="mt-6">
            <Link to="/how-to-edit" className="text-green-600 hover:underline font-medium">
              View our detailed tutorial on how to customize your template →
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/templates" className="btn-secondary mr-4">Browse More Templates</Link>
          <Link to="/contact" className="btn-outline">Need Help?</Link>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
