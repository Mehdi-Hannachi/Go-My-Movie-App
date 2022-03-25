import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";

const Filter = ({ setSearchTxt }) => {
  return (
    <div>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
};

export default Filter;
