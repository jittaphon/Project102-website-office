import Accordion from "react-bootstrap/Accordion";

function AlwaysOpenExample2() {
    const message =
        " 1. จะต้องเป็นบุคลากรของสำนักงานเขตพื้นที่การศึกษาประถมศึกษาเชียงใหม่ เขต1 \n 2. ติดต่อ กลุ่มส่งเสริมการศึกษาทางไกล เทคโนโลยีสารสนเทศและการสื่อสาร เพื่อขอ Account  \n 3. หลังจากดำเนินการเรียบร้อยแล้วท่านจะได้รับ Chiangmaiarea1 Account ในรูปแบบ name@chiangmaiarea1.go.th ";
    const message2 =
        " 1. ไปที่การกู้คืนบัญชี Email ที่ Google \n 2. ตอบคำถามเพื่อยืนยันว่าเป็นบัญชีของคุณ ตอบคำถามอย่างสุดความสามารถ \n 3. เซ็ตรหัสผ่านเมื่อมีข้อความแจ้ง เลือกรหัสผ่านที่รัดกุมที่ยังไม่เคยใช้กับบัญชีนี้\n 4. หากพบปัญหา ให้ติดต่อกลุ่มส่งเสริมการศึกษาทางไกล เทคโนโลยีสารสนเทศและการสื่อสาร  ";

    return (
        <Accordion>
            <div className="FAQ_text">
                <b> Chiangmaiarea1 Account</b>
            </div>
            <Accordion.Item eventKey="0">
                <Accordion.Header>จะขอรับ Chiangmaiarea1 Account ได้อย่างไร </Accordion.Header>
                <Accordion.Body>
                    <div className="FAQ_text">
                        <span className="css-fix">{message}</span>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>ลืม Username และ Password ต้องทำอย่างไร</Accordion.Header>
                <Accordion.Body>
                    <div className="FAQ_text">
                        <span className="css-fix">{message2}</span>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AlwaysOpenExample2;
