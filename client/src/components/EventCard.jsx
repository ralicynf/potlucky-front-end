const EventCard = (details) => {

    return (
            <div className="card" onClick={ () => {details.onClick(details.id)}}>
                <div className="buffer">
                    <div>
                        <h3>{details.eventName}</h3>
                    </div>
                    <div>
                        <p>{details.eventDate}</p>
                        <p>{details.eventLocation}</p>
                        {details.isHost ? (
                            <div>
                                <p>{details.eventDescription}</p>
                            </div>
                        ) : (<></>)}
                    </div>
                </div>
            </div>
    )
}

export default EventCard