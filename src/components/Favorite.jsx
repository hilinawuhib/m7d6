import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavoriteAction } from "../redux/actions";

const Favourites = () => {
  const favorite = useSelector((state) => state.favorite.jobset);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <ul  style={{ listStyle: "none" }}>
            {favorite.map((jobs, i) => (
              <div>
                <li key={i} className="my-4 favcontent">
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeFromFavoriteAction(i))}
                  >
                    <MdOutlineRemoveCircle />
                  </Button>
                  <span className="mx-5 ">{jobs.title}</span>
                  <span className="mx-5 ">{jobs.company_name}</span>
                  <span className="mx-5 ">{jobs.job_type}</span>
                </li>
              </div>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
