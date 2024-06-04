import ContactMe from './ContactMe';
import Experience from './Experience';
import Hero from './Hero';

function Home() {
  return (
    <>
      <div id="hero" className="slides page-1">
        <Hero />
      </div>
      <div id="experience" className="slides page-2">
        <Experience />
      </div>
      <div id="contact-me" className="slides page-3">
        <ContactMe />
      </div>
    </>
  );
}

export default Home;
