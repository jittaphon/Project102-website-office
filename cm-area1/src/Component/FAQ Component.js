import { Container } from "react-bootstrap";
import "animate.css";
import {FAQ} from "./FAQBackDroup";
export const FAQPage = (className) => {
    return (
        <section className="banner-data" id="home">
            <Container>
                <FAQ />
            </Container>
        </section>
    );
};
