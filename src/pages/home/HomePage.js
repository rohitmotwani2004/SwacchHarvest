// src/HomePage.jsx
import React from "react";
import { HeroSection } from "./components/HeroSection";
// import { ConvertToOrganicSection } from "./components/ConvertToOrganicSection";
import { Faqs } from "./components/Faqs";
import { ChatBot } from "./components/ChatBot";
import Map from "./components/Map";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <main>
        <div>
          {/* <ConvertToOrganicSection /> */}
          <Map/>
          <Faqs />
        </div>
      </main>
      <ChatBot /> 
    </>
  );
};
