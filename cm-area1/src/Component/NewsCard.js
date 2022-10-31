import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export const NewsCard = ({ title, description, imgUrl,id }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={description} />
                <Link className="text-link" to={`/news/news-detail/${id}`}>
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </Link>
            </div>
        </Col>
    );
};
