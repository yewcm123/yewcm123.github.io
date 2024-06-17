import ContactMe from '../contactMe/ContactMe';
import Experience from '../experience/Experience';
import Hero from '../hero/Hero';

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
