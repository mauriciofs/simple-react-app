import React, {Component} from 'react';
import {Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {Redirect} from 'react-router';
import * as _ from 'lodash';

class ArticleDetails extends Component {
    render() {
        if(_.isEmpty(this.props.article)){
            console.log()
            return <Redirect to='/error'/>
        }

        const article = typeof this.props.article.content !== 'undefined' ? this.props.article.content.resource : {};
        const goBack = this.props.history.goBack;

        return (
            <div className='ArticleDetails'>
                {article.meaningful_description && 
                    <div>
                        <ul className="pager">
                            <li className="previous">
                                <Button bsStyle='link' onClick={goBack}>&larr; Previous Page</Button>
                            </li>
                        </ul>
                        <div className='well'>
                            <b>Description:</b> {article.meaningful_description}
                            <hr/>
                            <b>Additional Test:</b> {article.additional_text}
                            <hr/>
                            <b>Categorization:</b> {article.categorization}
                            <hr/>
                            <b>Standards:</b> {article.standards ? 
                            <ListGroup>
                                {article.standards.standard instanceof Array ? 
                                    article.standards.standard.map((standard) => {
                                        return <ListGroupItem key={standard.id}><b>{standard.id}</b> - {standard.description}</ListGroupItem>
                                    }) :
                                    <ListGroupItem><b>{article.standards.standard.id}</b> - {article.standards.standard.description}</ListGroupItem>
                                }
                            </ListGroup>
                            : 'None'}
                            
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(ArticleDetails);