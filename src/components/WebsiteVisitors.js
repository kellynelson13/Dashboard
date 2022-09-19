
const WebsiteVisitors = (props) => {
    return (
        <div className="visitors">
            <p>Website Visitors</p>
            <h3>{props.visitors}</h3>
            <div className="rectangle"></div>
        </div>
    )
}

export default WebsiteVisitors;