import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import FlushExample from "./Collpase2";
import TrackVisibility from "react-on-screen";
export const DataService = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="ChoiceBox" id="ChoiceBoxs">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="ChoiceBox-bx wow zoomIn">
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__flipInX" : ""}>
                                        <h2>Data Web Service</h2>
                                    </div>
                                )}
                            </TrackVisibility>
                            <div className="Button">
                                <Button>
                                    <Link className="btn" role="button" to="/information/data">
                                        Data
                                    </Link>
                                </Button>{" "}
                            </div>
                            <FlushExample />
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    );
};
