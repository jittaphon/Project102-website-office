import { Container } from "react-bootstrap";
import "animate.css";
import { NewsDetailBackDrop } from "./NewsDetailBackDrop";
export const NewsDetailComponent = (className) => {
    return (
        <section className="banner-NewsDetailBackDrop" id="home">
            <Container>
                <NewsDetailBackDrop />
            </Container>
        </section>
    );
};
