import { Card, Col, Container, Row } from "react-bootstrap";
import useNewsData from "../hooks/useNewsData";
import { useState } from "react";
import CustomPagination from "./CustomPagination";

const NewsList = (props) => {
  const { category, searchTerm } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 4;

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);
  

  // ............... first we did commented code written at last ................

  const { newsData, loading, error } = useNewsData(category, searchTerm);

  if (loading) {
    return <div>Loading.....</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData.slice(startIndex, endIndex);

  return (
    <Container>
      <Row>
        {currentArticles?.map((article) => (
          <Col xs={12} md={6} lg={4} key={article.url}>
            <Card>
              <Card.Img src={article.image} varient="top" />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Card.Link href={article.url} target="_blank">Read More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <CustomPagination currentPage={currentPage} totalPages={totalPages} 
        onPageChange = {onPageChange}
      />
    </Container>
  );
};

export default NewsList;

// useEffect(() => {
//   const fetchNews = async () => {
//     let url = "https://gnews.io/api/v4/top-headlines?lang=en";

//     if (category) {
//       url += `&topic=${category}`;
//     }
//     if (searchTerm) {
//       url += `&q=${searchTerm}`;
//     }
//     url += `&token=${process.env.VITE_GNEWS_API_KEY}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
//     setNews(data.articles);
//   };

//   fetchNews();
// },[searchTerm, category]);
