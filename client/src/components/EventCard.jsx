const EventCard = (details) => {

    return (
        <div className='event-box'>
            <div className="recipe-card" onClick={ () => {details.onClick(details.id)}}>
                <div>
                    <h1>{details.eventName}</h1>
                </div>
                <div>
                    <h3>{details.eventDate}</h3>
                    <h3>{details.eventLocation}</h3>
                </div>
            </div>
        </div>
    )
}

export default EventCard