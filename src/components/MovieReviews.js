import React from 'react'


function MovieReviews({ reviews }) {

    
    let renderData = () => {
        

        return reviews.map((movie, index) => {
            const {
                display_title,
                byline,
                headline,
                link,
                summary_short
            } = movie
            return (<li className='review' key={index}>
                <h1>{display_title}</h1>
                <small>{headline}</small><br></br>
                <small>{byline}</small>
                <hr></hr>
                {summary_short} <a href={link.url}>read more...</a>
                

                </li>)
        })
    }

    return(
        <div className='review-list'>
            <ul>
            {renderData()}
            </ul>
        </div>
    )
}
MovieReviews.defaultProps = {
    reviews: []
};
export default MovieReviews