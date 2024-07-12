import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import NavbarComponent from "./Navbar";
import SearchBar from "./SearchBar";
import BlogList from "./BlogList";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const BlogContainer = ({ onLogout }) => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const handleLogout = () => {
    onLogout(); // Call the parent component's logout function
    setLoggedOut(true); // Set loggedOut state to true
  };

  // Redirect to home if loggedOut state is true
  if (loggedOut) {
    return <Navigate to="/" />;
  }

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <NavbarComponent />
      <Container>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <BlogList posts={filteredPosts} />
      </Container>
    </div>
  );
};

export default BlogContainer;
