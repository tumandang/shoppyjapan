import AboutShoppan from "./components/AboutShoppan";
import WhyChooseUS from "./components/WhyChooseUS";

// app/about/page.js
export default function About() {
  return (
    <main className="w-auto pb-24 grow">
      <AboutShoppan/>
      <WhyChooseUS/>
    </main>
  );
}
