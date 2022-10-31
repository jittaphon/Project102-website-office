import Accordion from "react-bootstrap/Accordion";

function AlwaysOpenExample3() {
    return (
        <Accordion>
            <div className="FAQ_text">
                <b>Technical</b>
            </div>
            <Accordion.Item eventKey="0">
                <Accordion.Header>ระบบคอมพิวเตอร์ , โปรเเกรม , เครื่องพิมพ์ เกิดปัญหา</Accordion.Header>
                <Accordion.Body>
                    <div className="FAQ_text">
                        <span>
                            ติดต่อ กลุ่มส่งเสริมการศึกษาทางไกล เทคโนโลยีสารสนเทศและการสื่อสาร 053-112677 ต่อ 319
                        </span>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AlwaysOpenExample3;
