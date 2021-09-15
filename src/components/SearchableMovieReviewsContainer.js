import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'fDmiSseGorov8vQkDE6zcfYjWIn7dxBl';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMoveReviewsContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    getData(searchTerm) {
        fetch(`${URL}&query=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            
            this.setState({
                reviews: data.results
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    
                    this.getData(this.state.searchTerm)}}>
                <label htmlFor='search'>Search for movie reviews: </label>
                <input name='search' onChange={(e) => this.setState({searchTerm: e.target.value})}placeholder='enter movie...'></input>
                <button type='submit'>Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
