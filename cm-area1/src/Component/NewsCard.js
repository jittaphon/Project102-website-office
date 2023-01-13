import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export const NewsCard = ({ description, data }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img class="article" src={data.image_title_url[0]} alt={description} />
                <Link className="text-link" to={`/article/${data._id}`}>
                    <div className="proj-txtx">
                        <h6>{data.Headline}</h6>
                        <span>{data.DateTime}</span>
                    </div>
                </Link>
            </div>
        </Col>
    );
};
