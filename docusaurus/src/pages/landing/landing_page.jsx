import React from 'react';
import Vision from './vision';
import Problem from './problem';
import Solution from './solution';
import Audience from './audience';
import ProductSuite from './product_suite';
import CompetitiveAdvantage from './competitive_advantage';
import Traction from './traction';
import OwlMascot from './owl_mascot';
import Future from './future';
import Contact from './contact';

export default function LandingPage() {
  return (
    <>
      <Vision />
      <Problem />
      <Solution />
      <Audience />
      <ProductSuite />
      <CompetitiveAdvantage />
      <Traction />
      <OwlMascot />
      <Future />
      <Contact />
    </>
  );
}
