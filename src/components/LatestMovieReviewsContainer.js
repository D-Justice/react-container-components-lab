import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'fDmiSseGorov8vQkDE6zcfYjWIn7dxBl';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(`${URL}`)
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
            <div className='latest-movie-reviews'>
                
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
