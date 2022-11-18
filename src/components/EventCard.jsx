const EventCard = (details) => {
    const isInThePast = (date) => {
        const today = new Date().toISOString()
        return date < today
    }

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const formatTime = (dateString) => {
        const options = { timeStyle: 'short'}
        return new Date(dateString).toLocaleTimeString('en-US', options)
    }

    const PastEvent = ({ isOver }) => {
        return (
            <div className={isOver ? 'over card' : 'card'} onClick={ () => {details.onClick(details.id)}}>
                <div className="buffer">
                    <div>
                        <h3 className='event-name'>{details.eventName}</h3>
                    </div>
                    <div>

                        <div className='dateLoc'>
                          <p>{formatDate(details.eventDate)} at {formatTime(details.eventDate)}</p>
                          <p>{details.eventLocation}</p>
                        </div>
                        {details.isHost ? (
                            <div className='details-description'>
                                <h4>{details.eventDescription}</h4>
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

    return (
            <div>
                <PastEvent isOver={isInThePast(details.eventDate)}/>
            </div>
    )
}

export default EventCard