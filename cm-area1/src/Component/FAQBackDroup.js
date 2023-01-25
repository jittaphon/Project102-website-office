import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import AlwaysOpenExample from "./CosllpaseFAQ";
import AlwaysOpenExample2 from "./CosllpaseFAQ2";
import AlwaysOpenExample3 from "./CosllpaseFAQ3";
import TrackVisibility from "react-on-screen";
export const FAQ = () => {
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
                                        <h2>FAQ</h2>
                                    </div>
                                )}
                            </TrackVisibility>
                          <AlwaysOpenExample/>
                          <div className="space"></div>
                          <AlwaysOpenExample2/>
                          <div className="space"></div>
                          <AlwaysOpenExample3/>
                          
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="ict" />
        </section>
    );
};
