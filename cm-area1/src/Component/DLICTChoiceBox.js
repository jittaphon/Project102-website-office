import meter1 from "../assets/img/logoDLIT.png";
import meter2 from "../assets/img/dltv-main-logo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";

export const ChoiceBox = () => {
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
                                        <h2>Distance Learning Information Technology</h2>

                                        <p>
                                            เครื่องมือที่มีเนื้อหาและเทคโนโลยีสำหรับพัฒนาคุณภาพการศึกษาอย่างครบวงจร
                                            ตั้งแต่ การวางแผน การจัดการเรียนรู้
                                            การจัดการเรียนการสอนตามหลักสูตรแกนกลางการศึกษาฯ
                                            การจัดการเรียนการสอนเพิ่มเติม การทดสอบที่มีประสิทธิภาพ
                                            และการพัฒนาวิชาชีพอย่างยั่งยืน
                                        </p>
                                    </div>
                                )}
                            </TrackVisibility>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme ChoiceBox-slider"
                            >
                                <TrackVisibility>
                                    {({ isVisible }) => (
                                        <div className={isVisible ? "animate__animated animate__flipInX" : ""}>
                                            <div className="item">
                                                <a
                                                    href="http://www.dlit.ac.th/site/index.php"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img src={meter1} alt="Image" />
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </TrackVisibility>
                                <TrackVisibility>
                                    {({ isVisible }) => (
                                        <div className={isVisible ? "animate__animated animate__flipInX" : ""}>
                                            <div className="item">
                                                <a href=" https://dltv.ac.th/" target="_blank" rel="noreferrer">
                                                    <img src={meter2} alt="Image" />
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </TrackVisibility>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    );
};
