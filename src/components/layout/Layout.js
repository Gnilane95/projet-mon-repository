import React from 'react'
import Footer from '../footer/Footer';
import CardInfo from "../main/CardInfo";
import Navigation from '../Navigation/Navigation';

export default function Layout({children}) {
  return (
    <div className="px-12 h-screen w-screen">
      <Navigation />
      <main className="bg-accent-light ">
        <div className="flex">
          <CardInfo />
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
