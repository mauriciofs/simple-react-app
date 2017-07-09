import React, { Component } from 'react';
import {PageHeader} from 'react-bootstrap';
import Content from './Content.json';
import * as _ from 'lodash';
import { Route, Switch } from 'react-router-dom';
import Articles from './components/Articles';
import ArticleDetails from './components/ArticleDetails';
import SearchBar from './components/SearchBar';
import ErrorHandler from './components/ErrorHandler';
import './App.css';

class App extends Component {
    //Max content per page
    static maxPerPage = 5;
    //Getting total to calculate numbers of pages
    static total = Content.response.results.result.length;

    constructor(){
        super();
        this.state = {
            activePage: 1,
            articles: this.sortResources(Content.response.results.result),
            //articles: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handlePagination = this.handlePagination.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
    * Sort Content by type
    * @param {String} type 
    * @return {Array} The sorted array
    */
    sortResources(content = [], type = 'resource_type'){
        return _.orderBy(content, [(c) => c.content.resource[type]], ['asc']);
    }

    paginate(content = [], page){
        //Calculate offset and limit to paginate
        let from = page === 1 ? page - 1 : (page - 1) * App.maxPerPage;
        return content.slice(from, App.maxPerPage * this.state.activePage);
    }

    handlePagination(page){
        this.setState({
            activePage: page
        });
    }

    handleChange(event){
        let type = event.target.value;
        this.setState({
            articles: this.sortResources(this.state.articles, type),
            activePage: 1,
        });
    }

    handleSubmit(keyword){
        //Implements search functionality
        // this.setState({
        //     articles: this.sortResources(),
        // })
    }

    render() {
        return (
            <div className="App">
                <PageHeader className='App-header'>Welcome visitor!!</PageHeader>
                <main>
                    <Switch>
                        <Route exact path='/' render={() =>
                            <main>
                                {/*<SearchBar onSubmit={this.handleSubmit}/>*/}
                                <Articles 
                                    articles={this.paginate(this.state.articles, this.state.activePage)}
                                    onPagination={this.handlePagination}
                                    activePage={this.state.activePage}
                                    maxPerPage={App.maxPerPage}
                                    onChange={this.handleChange}
                                    total={App.total}
                                />
                            </main>
                        }
                        />
                        <Route path='/article/:id' render={({match}) => {
                                let article = this.state.articles.filter((article) => article.content.resource.id === match.params.id).pop();
                                return <ArticleDetails article={article}/>
                            }
                        }/>
                        <Route path='/error' component={ErrorHandler}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
