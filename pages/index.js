import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";

function Home() {
  return (
    <div>
      <Container>
        <Row className="text-center">
          <Col>
            <h2 className="mt-5">Ambiente de desenvolvimento</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
