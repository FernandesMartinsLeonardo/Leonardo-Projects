import React from 'react';
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Faq } from "../../components/FAQ";


export function Home() {
  return (
    <>
      <Banner />
      <Faq />
      <Footer />
    </>
  );
}
