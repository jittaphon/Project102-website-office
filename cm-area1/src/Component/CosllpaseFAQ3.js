import Accordion from "react-bootstrap/Accordion";
import Img from "../assets/img/WIFI.jpg";
import Img2 from "../assets/img/Authentication.jpg";
import Img3 from "../assets/img/success.jpg";
import Img4 from "../assets/img/WIFI2.jpg";
function AlwaysOpenExample3() {
    const message =
        " 1.2 ทำการกรอกรหัสผ่าน 0899897282 \n 1.3 กด 'เชื่อมต่อ' หรือ 'Connect' \n 1.4 เว็บเบราว์เซอร์จะเเสดงหน้าเว็บ Authentication หรือ สามารถเข้าหน้าเว็บ Authentication ด้โดยตรงได้ที่ https://wifi.login/ จะปรากฎหน้าจอ ดังนี้ ";
    const message2 =
        " 1.5 Username : lanna \n 1.6 Password : 1234 \n 1.7 เสร็จเเล้วกด 'Login' \n 1.8 เมื่อ Login ผ่านเรียบร้อยเเล้ว จะปรากฎหน้าจอ ดังนี้ ";
    const message3 =
        " 1.5 Username : lanngoen \n 1.6 Password : 1234 \n 1.7 เสร็จเเล้วกด 'Login' \n 1.8 เมื่อ Login ผ่านเรียบร้อยเเล้ว จะปรากฎหน้าจอ ดังนี้ ";
    return (
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
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
