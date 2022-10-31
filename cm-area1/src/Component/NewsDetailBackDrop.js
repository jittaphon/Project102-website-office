import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";

export const NewsDetailBackDrop = () => {
    return (
        <section className="NewsDetailBackDrop" id="ChoiceBoxs">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="NewsDetailBackDrop-bx wow zoomIn">
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__flipInX" : ""}>
                                        <h2 >Distance Learning Information Technology</h2>

                                        <p>
                                            
                                        </p>
                                    </div>
                                )}
                            </TrackVisibility>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    );
};
