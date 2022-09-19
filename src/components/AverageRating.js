
const AverageRating = (props) => {
    return (
        <div className="average-rating">
            <p>Average Rating</p>
            <h3>{props.average}</h3>
        </div>
    )
}

export default AverageRating;