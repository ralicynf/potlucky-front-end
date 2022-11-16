const Items = (items) => {

    return (
        <div>
            <ul>
                {items.items.map((item, index) => (
                    <li key={index}>
                        {items}
                    </li>
                ))}                
            </ul>
        </div>
    )

}

export default Items