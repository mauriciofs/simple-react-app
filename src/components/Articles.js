import React, { Component } from 'react';
import {Col, ListGroup, ListGroupItem, FormGroup, ControlLabel, FormControl, Pagination} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Articles extends Component {
    render() {
        const articles = this.props.articles || [];
        const sortBy = {
            'Resource Type': 'resource_type',
            'Display Title': 'display_title',
            'Media Type': 'media_type',
            'Language': 'language',
        };

        return ( 
        <div className="Articles">
            {articles.length > 0 && 
                <div>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Sort By: </ControlLabel>
                        <FormControl componentClass="select" onChange={this.props.onChange} placeholder="select">
                            {Object.keys(sortBy).map((v, i) => {
                                return <option value={sortBy[v]} key={i}>{v}</option>
                            })}
                        </FormControl>
                    </FormGroup>
                    <Pagination
                        prev
                        next
                        ellipsis
                        boundaryLinks
                        items={Math.ceil(this.props.total/this.props.maxPerPage)}
                        maxButtons={5}
                        activePage={this.props.activePage}
                        onSelect={this.props.onPagination} />
                </div>
            }
            {articles.length > 0 ? articles.map((v) => {
                let resource = v.content.resource;
                return (
                    <Col md={4} sm={4} lg={4} className='well' key={resource.id}>
                        <ListGroup>
                            <ListGroupItem><b>Resource Type:</b> {resource.resource_type}</ListGroupItem>
                            <ListGroupItem><b>Display Title:</b> {resource.display_title}</ListGroupItem>
                            <ListGroupItem><b>Media Type:</b> {resource.media_type}</ListGroupItem>
                            <ListGroupItem><b>Language:</b> {resource.language}</ListGroupItem>
                        </ListGroup>
                        <div className='details'>
                            {resource.viewable === "true" && <Link to={`/article/${resource.id}`}>Details</Link>}
                        </div>
                    </Col>
                )
            }) : ''}
        </div>
        );
    }
}

export default Articles;
