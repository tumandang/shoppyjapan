
import React from "react";
import FAQ from "../../(components)/FAQ";
import LayoutContainer from "../../(components)/widget/LayoutContainer";
// import RecentlyView from "../(components)/RecentlyView";
import RakutenHome from "../../(components)/Rakuten/components/RakutenHome";
import DataMatric from "../../(components)/widget/DataMatric";
import ClientSay from "../../(components)/widget/ClientSay";
import Linkshop from "../../(components)/LinkShop/linkshop";
// import RakumaHome from "../(components)/Rakuma/components/RakumaHome";
// import JDirectHome from "../(components)/JDirect/components/JDirectHome";


function Page() {
  return (
    <main>
      <LayoutContainer/>
      <RakutenHome/>
      <Linkshop></Linkshop>
      <DataMatric/>
      <ClientSay/>
      <FAQ/>
    </main>

  );
}

export default Page;
