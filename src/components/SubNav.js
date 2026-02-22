import "./SubNav.css";
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ServicesModal from "./services.js";
import { TbDental } from "react-icons/tb";
import { GiToothbrush } from "react-icons/gi";
import { RiParentFill } from "react-icons/ri";
// import ExistingForms from "./ExistingForm.js";

function subNav() {
  return (
    <div>
      <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center py-6">
        <button
          onClick={() =>
            window.open(
              "https://patient.rocks/PatientForm/patient/ZGFlN2M3NDUtMWJmYi00MDU5LTk0MmMtZDNmMTBh",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="button-81 "
        >
          New Patient Forms
        </button>

        {/* <button
          onClick={() =>
            window.open(
              "https://newpatientinfo.net/PracticeWebSite/PracticeWebSheetMobile.aspx?P=4426&S=9836&L=&F=&NFID=9837&NFID=9839&NFID=9840",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="button-81"
        
        >
          New Patient Forms (Mobile/Tablet)
        </button>

        <ExistingForms /> */}
      </div>

      <section class="services">
        <Container>
          <Row className="services-style">
            <Col style={{ color: "#266880" }}>
              <TbDental
                size={150}
                className="container d-flex justify-content-center"
              />
            </Col>
            <Col xs={8} className="mr-12 grid content-center">
              <h4>Check-Up</h4>
              <p className="mr-12">
                At our dental practice nestled in Orange County, crafting
                captivating smiles is our specialty. With an artisanal approach
                and unwavering dedication to excellence, our dynamic team led by
                my mom and her esteemed colleague ensures each transformation is
                a masterpiece. Our goal? Unveiling smiles that radiate natural
                beauty seamlessly.
              </p>
            </Col>
          </Row>
          <Row className="services-style">
            <Col style={{ color: "#266880" }}>
              <RiParentFill
                size={150}
                className="container d-flex justify-content-center"
              />
            </Col>
            <Col xs={8} className="mr-12 grid content-center">
              <h4>Family</h4>
              <p className="mr-12">
                With personalized care and genuine passion, my mom and her
                trusted partner extend a familial embrace to all who enter.
                Together, we create moments of connection and authenticity,
                crafting smiles that feel like cherished heirlooms. Our mission?
                Cultivating an experience that feels like coming home.
              </p>
            </Col>
          </Row>
          <Row className="services-style">
            <Col style={{ color: "#266880" }}>
              <GiToothbrush
                size={150}
                className="container d-flex justify-content-center"
              />
            </Col>
            <Col xs={8} className="mr-12 grid content-center">
              <h4>Hygiene</h4>
              <p className="mr-12">
                Simplicity reigns supreme as we redefine oral care. With
                meticulous attention to hygiene and a commitment to purity, Dr.
                Shah curate smiles that exude vitality and freshness. Embracing
                the essence of natural beauty, our goal is to leave an indelible
                mark of authenticity on every smile we touch.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="container d-flex justify-content-center">
        <ServicesModal></ServicesModal>
      </div>
    </div>
  );
}

export default subNav;
