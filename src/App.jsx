import {Row,Col,Navbar,Nav,Form,FormControl,Button,Dropdown,Container,
} from "react-bootstrap";
import NewsList from "./Components/NewsList";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategory = (category) => {
    setCategory(category);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  };

  return (
    <>
      <Navbar expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-4">
            News App
          </Navbar.Brand>

          <Navbar.Toggle area-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Dropdown>
                <Dropdown.Toggle variant="outline-primary">
                  Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleCategory("world")}>
                    World
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategory("Business")}>
                    Business
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategory("Technology")}>
                    Technology
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategory("Sports")}>
                    Sports
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategory("Entertainment")}
                  >
                    Entertainment
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>

            <Form onSubmit={handleSearch} className="d-flex">
              <FormControl
                type="text"
                placeholder="search"
                className="me-2"
                name="search"
              />

              <Button variant="outline-primary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col xs={12} md={3} bg="dark">
            <h5>Categories</h5>
            <Nav className="flex-column">
              <Nav.Link onClick={() => handleCategory("world")}>World</Nav.Link>
              <Nav.Link onClick={() => handleCategory("Business")}>
                Business
              </Nav.Link>
              <Nav.Link onClick={() => handleCategory("Technology")}>
                Technology
              </Nav.Link>
              <Nav.Link onClick={() => handleCategory("Sports")}>
                Sports
              </Nav.Link>
              <Nav.Link onClick={() => handleCategory("Entertainment")}>
                Entertainment
              </Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} md={9}>
            <NewsList category={category} searchTerm={searchTerm} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
