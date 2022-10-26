import Accordion from "react-bootstrap/Accordion";
import Img from "../assets/img/WIFI.jpg";
import Img2 from "../assets/img/Authentication.jpg";
import Img3 from "../assets/img/success.jpg";
import Img4 from "../assets/img/WIFI2.jpg";
function AlwaysOpenExample() {
    const message =
        " 1.2 ทำการกรอกรหัสผ่าน 0899897282 \n 1.3 กด 'เชื่อมต่อ' หรือ 'Connect' \n 1.4 เว็บเบราว์เซอร์จะเเสดงหน้าเว็บ Authentication หรือ สามารถเข้าหน้าเว็บ Authentication ด้โดยตรงได้ที่ https://wifi.login/ จะปรากฎหน้าจอ ดังนี้ ";
    const message2 =
        " 1.5 Username : lanna \n 1.6 Password : 1234 \n 1.7 เสร็จเเล้วกด 'Login' \n 1.8 เมื่อ Login ผ่านเรียบร้อยเเล้ว จะปรากฎหน้าจอ ดังนี้ ";
    const message3 =
        " 1.5 Username : lanngoen \n 1.6 Password : 1234 \n 1.7 เสร็จเเล้วกด 'Login' \n 1.8 เมื่อ Login ผ่านเรียบร้อยเเล้ว จะปรากฎหน้าจอ ดังนี้ ";
    const message4 =
        " - บุคลากรของสำนักงานเขตพื้นที่การศึกษาประถมศึกษาเชียงใหม่ เขต1 \n - ผู้ที่มาใช้บริการของสำนักงานเขตพื้นที่การศึกษาประถมศึกษาเชียงใหม่ เขต1\n - บุคลากรข้าราชการเกษียณของสำนักงานเขตพื้นที่การศึกษาประถมศึกษาเชียงใหม่ เขต1";
    return (
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <div className="FAQ_text">
                <b> วิธีเชื่อมต่อ อินเตอร์เน็ต</b>
            </div>
            <Accordion.Item eventKey="0">
                <Accordion.Header>การ Login Wi-Fi ห้องประชุมล้านนา</Accordion.Header>
                <Accordion.Body>
                    <div className="FAQ_text">
                        <span>1.1 เชื่อมต่อสัญญาน Wi-Fi เเละเลือก "Area1_Lanna"</span>
                        <div className="FAQ_IMG">
                            <img src={Img} alt="Header Img" />
                        </div>
                        <span className="css-fix">{message}</span>
                        <div className="FAQ_IMG">
                            <img src={Img2} alt="Header Img" />
                        </div>
                        <span className="css-fix">{message2}</span>
                        <div className="FAQ_IMG">
                            <img src={Img3} alt="Header Img" />
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>การ Login Wi-Fi ห้องประชุมล้านเงิน</Accordion.Header>
                <Accordion.Body>
                    <div className="FAQ_text">
                        <span>1.1 เชื่อมต่อสัญญาน Wi-Fi เเละเลือก "Area1_Lan Ngern1" หรือ "Area1_Lan Ngern2" </span>
                        <div className="FAQ_IMG">
                            <img src={Img4} alt="Header Img" />
                        </div>
                        <span className="css-fix">{message}</span>
                        <div className="FAQ_IMG">
                            <img src={Img2} alt="Header Img" />
                        </div>
                        <span className="css-fix">{message3}</span>
                        <div className="FAQ_IMG">
                            <img src={Img3} alt="Header Img" />
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>ใครสามารถใช้บริการได้บ้าง</Accordion.Header>
                <Accordion.Body>
                    <div className="FAQ_text">
                    <span className="css-fix">{message4}</span>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AlwaysOpenExample;
