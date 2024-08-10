import styled from "styled-components";
import GloabalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GloabalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Welcome guest :)</Heading>
              <Button
                variation="primary"
                size="medium"
                onClick={() => alert("Checked In")}
              >
                Check in
              </Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("Checked Out")}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <Input type="number" placeholder="Number of guests"></Input>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
