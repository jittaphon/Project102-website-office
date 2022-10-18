import { Container} from "react-bootstrap";
import "animate.css";
import {DataService} from "./DataServiceBackDroup";
export const Data_Service = () => {
   
    return (
        <section className="banner-data" id="home">
            <Container>
              <DataService/>
            </Container>
        </section>
    );
};
