const EventCard = (details) => {

    return (
            <div className="event-card" onClick={ () => {details.onClick(details.id)}}>
                <div>
                    <h3>{details.eventName}</h3>
                </div>
                <div>
                    <p>{details.eventDate}</p>
                    <p>{details.eventLocation}</p>
                </div>
            </div>
    )
}

export default EventCard