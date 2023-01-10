import { Container } from "react-bootstrap";
import "animate.css";
import { ChoiceBox } from "./DLICTChoiceBox";
export const DLICT_page = (className) => {
    return (
        <section className="banner-DLICT" id="home">
            <Container>
                <ChoiceBox />
            </Container>
        </section>
    );
};
