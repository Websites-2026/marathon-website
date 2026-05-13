import React from 'react';
import SubHeader from './SubHeader';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50">
      <SubHeader />
      <Navbar />
    </header>
  );
};

export default Header;
