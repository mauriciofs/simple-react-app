import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class SearchBar extends Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.keyword.value);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <FormGroup controlId='SearchBar'>
                    <ControlLabel>Search:</ControlLabel>
                    <FormControl
                        type="text"
                        label="keyword"
                        placeholder="Enter text and press enter"
                        inputRef={ref => this.keyword = ref}
                    />
                </FormGroup>
            </form>
        )
    }
}

export default SearchBar;