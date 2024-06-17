import Button from '../../components/global/button';
import hero_img from '../../assets/hero.jpg';

const Hero = () => {
  const redirect = (url: string) => {
    redirect(url);
  };
  const linkedin_url = import.meta.env.VITE_LINKEDIN_URL;
  const github_url = import.meta.env.VITE_GITHUB_URL;
  return (
    <div className="hero content">
      <div className="headline-container">
        <h3>Hi, my name is</h3>
        <h1 className="highlight">
          <span className="highlight">Derrick Yew</span>
        </h1>
        <h2>I build things for the web</h2>
        <div className="text">
          <p>
            I am a web developer specializing in <span className="highlight">frontend</span> and{' '}
            <span className="highlight">backend</span> development and I love building tools that
            are user-friendly, simple and delightful.
          </p>
        </div>
        <div className="button-set">
          <Button
            variant="contained"
            onClick={() => {
              redirect(linkedin_url);
            }}>
            Linkedin
          </Button>
          <Button variant="outlined" onClick={() => redirect(github_url)}>
            Resume
          </Button>
        </div>
      </div>
      <div className="col-span-1 hero-img-container">
        <img src={hero_img} alt="hero image" className="hero-img box-shadow" />
      </div>
    </div>
  );
};

export default Hero;
