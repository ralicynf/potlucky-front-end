const EventCard = (details) => {

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const formatTime = (dateString) => {
        const options = { timeStyle: 'short'}
        return new Date(dateString).toLocaleTimeString('en-US', options)
    }

    return (
            <div className="card" onClick={ () => {details.onClick(details.id)}}>
                <div className="buffer">
                    <div>
                        <h3>{details.eventName}</h3>
                    </div>
                    <div>
                        <p>{formatDate(details.eventDate)} at {formatTime(details.eventDate)}</p>
                        <p>{details.eventLocation}</p>
                        {details.isHost ? (
                            <div>
                                <p>{details.eventDescription}</p>
                            </div>
                        ) : (
                        <div>
                            {details.items.find((item) => item.userId===details.userId) && <h4>You are bringing:</h4>}
                            {details.items.map((item) => 
                                <div key={item.id}>
                                    {(item.userId===details.userId) ? <p >{item.itemName}</p> : <></>}
                                </div>
                            )}
                        </div>
                        )}
                    </div>
                </div>
            </div>
    )
}

export default EventCard