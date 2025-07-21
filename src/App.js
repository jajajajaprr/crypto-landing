import React, { useState } from 'react';
import CryptoHeader from './components/CryptoHeader';
import CryptoFooter from './components/CryptoFooter';
import CryptoHome from './components/CryptoHome';
import CryptoWhatIsCrypto from './components/CryptoWhatIsCrypto';
import CryptoHowItWorks from './components/CryptoHowItWorks';
import CryptoTypesOfCrypto from './components/CryptoTypesOfCrypto';
import CryptoSecurityTips from './components/CryptoSecurityTips';
import CryptoNews from './components/CryptoNews';
import CryptoMyOtherPage from './components/CryptoMyOtherPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <CryptoHome />;
      case 'whatIsCrypto':
        return <CryptoWhatIsCrypto />;
      case 'howItWorks':
        return <CryptoHowItWorks />;
      case 'typesOfCrypto':
        return <CryptoTypesOfCrypto />;
      case 'securityTips':
        return <CryptoSecurityTips />;
      case 'news':
        return <CryptoNews />;
      case 'myOtherPage':
        return <CryptoMyOtherPage />;
      default:
        return <CryptoHome />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
      <CryptoHeader setCurrentPage={setCurrentPage} />
      <main className="flex-grow py-4 sm:py-8">
        {renderPage()}
      </main>
      <CryptoFooter />
    </div>
  );
};

export default App;

// DONE