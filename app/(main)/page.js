
import React from "react";
import FAQ from "../(components)/FAQ";
import LayoutContainer from "../(components)/widget/LayoutContainer";
import RecentlyView from "../(components)/RecentlyView";
import RakutenHome from "../(components)/Rakuten/components/RakutenHome";
import RakumaHome from "../(components)/Rakuma/components/RakumaHome";
import JDirectHome from "../(components)/JDirect/components/JDirectHome";


function Page() {
  return (
    <main>
      <LayoutContainer/>
      <JDirectHome/>
      <RakutenHome/>
      <RakumaHome/>
      <FAQ/>
    </main>

  );
}

export default Page;
