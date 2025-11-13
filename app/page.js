import { Button } from "@/components/ui/button";
import React from "react";
import Hero from "./(components)/hero";
import Banner from "./(components)/Banner";
import UsageBuy from "./(components)/UsageBuy";
import WhyChooseUS from "./(components)/WhyChooseUS";

function Page() {
  return (
    <main>
      <Hero></Hero>
      <Banner/>
      <WhyChooseUS/>
      <UsageBuy/>
    </main>

  );
}

export default Page;
