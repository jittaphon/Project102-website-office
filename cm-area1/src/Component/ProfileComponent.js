import "animate.css";
import { Container } from "react-bootstrap";
import { ChoiceBox } from "./ProfileChoiceBox";
export const ProfilePage = (className) => {
    return (
        <section className="banner-data" id="home">
            <Container>
                <ChoiceBox />
            </Container>
        </section>
    );
};
