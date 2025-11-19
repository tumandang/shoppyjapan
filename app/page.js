
import React from "react";
import Hero from "./(components)/hero";
import Banner from "./(components)/Banner";
import UsageBuy from "./(components)/UsageBuy";
import WhyChooseUS from "./(components)/WhyChooseUS";
import FAQ from "./(components)/FAQ";
// import LayoutContainer from "./(components)/LayoutContainer";


function Page() {
  return (
    <main>
      {/* <LayoutContainer/> */}
      <Hero></Hero>
      <Banner/>
      
      <UsageBuy/>
      <WhyChooseUS/>
      
      <FAQ/>
    </main>

  );
}

export default Page;
