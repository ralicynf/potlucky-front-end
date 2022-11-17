import Client from "./api";

// export const GetListItemsForEvent = async (eventId) => {
//     try {
//         const res = await Client.get(`/items/${eventId}`)
//         return res.data
//     } catch (error) {
//         throw error
//     }
// }

export const AddItem = async (items) => {
    try {
        const res = await Client.post(`/items`, items)
        return res.data
    } catch (error) {
        throw error
    }
}

// export const UpdateItem = async (itemId) => {
//     try {
//         const res = await Client.put(`/items/${itemId}`)
//         return res.data
//     } catch (error) {
//         throw error
//     }
// }

export const DeleteItem = async (itemId) => {
    try {
        const res = await Client.delete(`/items/${itemId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

//does there need to be an add item by user?