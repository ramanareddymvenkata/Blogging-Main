import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Form className="d-flex mb-3 m-2">
      <FormControl
        type="search"
        placeholder="Search posts"
        className="me-2"
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default SearchBar;
