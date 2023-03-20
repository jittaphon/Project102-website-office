import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export const NewsCard = ({ description, data }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img className="article" src={data.image_title_url} alt={description} />
                <Link className="text-link" to={`/article/${data.id}`}>
                    <div className="proj-txtx">
                        <h6>{data.headline}</h6>
                        <span>{data.dateTime}</span>
                    </div>
                </Link>
            </div>
        </Col>
    );
};
