import React from 'react'
import Footer from '../footer/Footer';
import CardInfo from "../main/CardInfo";
import Navigation from '../Navigation/Navigation';

export default function Layout({children}) {
  return (
    <div className="px-12">
      <Navigation />
      <main className="bg-accent-light ">
        <div className='flex justify-center'>
          <CardInfo />
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
