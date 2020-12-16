import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import { Wizard, Steps, Step } from "react-albus";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import Share from "../components/Share";
import Step1 from "../components/Step1";
import Image from "next/image";

function Home() {
  return (
    <div>
      <Container>
        <WrapperHead className="pt-3">
          <Row className="text-center">
            <Col className="d-flex justify-content-start">
              <Image
                src="/logo.png"
                alt="Picture of the author"
                width={160}
                height={60}
              />
            </Col>
            <Col class="d-flex align-items-center">
              <Share />
            </Col>
          </Row>
        </WrapperHead>
        <WrapperBody>
          <Row className="text-center">
            <Col class="">
              <Wizard>
                <Steps>
                  <Step id="gandalf">
                    <h1 className="text-align-center">Gandalf</h1>
                  </Step>
                  <Step id="dumbledore">
                    <h1 className="text-align-center">Dumbledore</h1>
                  </Step>
                  <Step id="ice king">
                    <h1 className="text-align-center">Ice King</h1>
                  </Step>
                </Steps>
                <Navigation />
              </Wizard>
            </Col>
          </Row>
        </WrapperBody>
      </Container>
    </div>
  );
}

const Title = styled.h1`
  color: red;
`;

const WrapperHead = styled.div`
  height: 10vh;
  background-color: #fff333;
`;

const WrapperBody = styled.div`
  height: 80vh;
  background-color: #f333;
`;

const WrapperFooter = styled.div`
  height: 10vh;
  background-color: #fff333;
`;

export default Home;
