const ItemInput = (item) => {

    return (
        <div>
            <label>Add item:</label>
            <input 
                type='text' name='item' onChange={item.handleChange} value={item.input} 
            />
            <button 
                className='add-button' 
                onClick={item.addItem}
            >
                Add
            </button>
        </div>
    )
}

export default ItemInput