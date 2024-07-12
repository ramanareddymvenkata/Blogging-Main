import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BlogList = ({ posts }) => {
    return (
        <div className="row">
            {posts.map(post => (
                <div className="col-md-4 mb-3" key={post.id}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.body.substring(0, 100)}...</Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
