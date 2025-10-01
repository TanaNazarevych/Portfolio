import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import FeaturedProjects from "../sections/FeaturedProjects";
import Testimonials from "../sections/Testimonials";
import Skills from "../sections/Skills";

import Footer from "../components/Footer";
import About from "../sections/About";

const Home = () => (
  <>
    <Navbar />
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <FeaturedProjects />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
    </main>
    <Footer />
  </>
);

export default Home;
