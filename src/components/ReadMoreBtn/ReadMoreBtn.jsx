function ReadMoreBtn({title, event}) { 
    return (
        <button type="button" className="Button" onClick={event}>{title}</button>
    )
}

export default ReadMoreBtn