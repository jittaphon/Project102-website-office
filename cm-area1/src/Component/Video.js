import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

export const VIDEO = () => {
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
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="video-bx wow zoomIn">
                            <h3>วีดิทัศน์</h3>

                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                interval={2000}
                                controls={false}
                                indicators={false}
                            >
                                <div class="ratio ratio-16x9">
                                    <iframe
                                        src="https://www.youtube.com/embed/DZmN0bO4PbA"
                                        title="YouTube video"
                                        allowfullscreen
                                    ></iframe>
                                </div>

                                <div class="ratio ratio-16x9">
                                    <iframe
                                        src="https://www.youtube.com/embed/fZ_9gleqUd8"
                                        title="YouTube video"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                                <div class="ratio ratio-16x9">
                                    <iframe
                                        src="https://www.youtube.com/embed/nv8T9hVZvKU"
                                        title="YouTube video"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
