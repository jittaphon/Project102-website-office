import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";
import FlushExample from "./Collpase";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
export const BackDroup = () => {
    return (
        <section className="ChoiceBox" id="ChoiceBoxs">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="ChoiceBox-bx wow zoomIn">
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__flipInX" : ""}>
                                        <h2>Data Management Center</h2>
                                    </div>
                                )}
                            </TrackVisibility>
                            <div className="Button">
                                <AwesomeButton type="primary">
                                    <Link className="btn" role="button" to="/information/data-service">
                                        Data Service{" "}
                                    </Link>
                                </AwesomeButton>
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
