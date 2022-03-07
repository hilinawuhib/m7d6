import { Component } from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import JobList from "./JobLists";
import uniqid from "uniqid";
import { fetchJobs } from "../redux/actions";

const Search = () => {
  const jobsFromReduxStore = useSelector((state) => state.job.jobset);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(fetchJobs(query));
  };

  return (
    <Container>
      <Row>
        <Col md={10} className="mx-auto my-3"></Col>
        <Col md={8} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              className="btn-search"
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Job title,Company"
            />
          </Form>
        </Col>
        <Col xs={4} className="mx-auto ">
          <Button variant="outline-dark" onClick={handleSubmit}>
            search
          </Button>
        </Col>
        <Col xs={10} className="mx-auto mb-4">
          {jobsFromReduxStore.map((jobData) => (
            <JobList key={uniqid()} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
