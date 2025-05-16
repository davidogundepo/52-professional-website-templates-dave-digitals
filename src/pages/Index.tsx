
import { useEffect } from 'react';
import HomePage from './HomePage';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Davedigitals - Professional Website Templates";
  }, []);

  return <HomePage />;
};

export default Index;
