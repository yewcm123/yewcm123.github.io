import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Button from "../features/ui/button";

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
                        <div>
                            <h1 className="headline">
                                Hello! I’m{" "}
                                <span className="highlight">Derrick</span>, a
                                developer from Malaysia.
                            </h1>
                            <p className="text">
                                I love building tools that are user-friendly,
                                simple and delightful. I am a self-learned
                                developer who does{" "}
                                <span className="highlight">full-stack</span>. I
                                had the opportunity to work with both large and
                                small, specialized and cross-functional teams
                                and developed a working style that leans towards
                                flexibility, clarity and collaboration
                            </p>
                            <div className="button-set">
                                <Button
                                    onClick={() => {
                                        redirect(linkedin_url);
                                    }}
                                >
                                    View Linkedin
                                </Button>
                                <Button onClick={() => redirect(github_url)}>
                                    View Github
                                </Button>
                            </div>
                        </div>

                        <div className="col-span-1 hero-image">asd</div>
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
