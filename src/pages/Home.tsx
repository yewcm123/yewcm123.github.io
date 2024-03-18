import Button from "../features/ui/button";
import hero_img from "../assets/hero.jpg";

function Home() {
    const redirect = (url: string) => {
        redirect(url);
    };
    const linkedin_url = import.meta.env.VITE_LINKEDIN_URL;
    const github_url = import.meta.env.VITE_GITHUB_URL;

    return (
        <>
            <div className="slides page-1">
                <div className="content">
                    <div className="hero">
                        <div className="headline-container">
                            <h1 className="headline">
                                Hello! I’m{" "}
                                <span className="highlight">Derrick</span>, a
                                developer from Malaysia.
                            </h1>
                            <div className="text">
                                <p>
                                    I love building tools that are
                                    user-friendly, simple and delightful.
                                </p>
                                <p>
                                    I am a self-learned developer who does{" "}
                                    <span className="highlight">
                                        full-stack
                                    </span>
                                    . I had the opportunity to work with both
                                    large and small, specialized and
                                    cross-functional teams and developed a
                                    working style that leans towards
                                    flexibility, clarity and collaboration
                                </p>
                            </div>
                            <div className="button-set">
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        redirect(linkedin_url);
                                    }}
                                >
                                    View Linkedin
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => redirect(github_url)}
                                >
                                    View Github
                                </Button>
                            </div>
                        </div>

                        <div className="col-span-1 hero-image">
                            <img
                                src={hero_img}
                                alt="hero image"
                                className="hero-img box-shadow"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="slides page-2">
                <div className="content">asd</div>
            </div>
            <div className="slides page-3">
                <div className="content">asd</div>
            </div>
            <p className="read-the-docs">
                Click on the ertertereVite and React loasdaagos to learn more
            </p>
        </>
    );
}

export default Home;
