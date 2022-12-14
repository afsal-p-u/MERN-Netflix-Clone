// get lists
export const getListsStart = () => ({
    type: "GET_LIST_START"
})
export const getListsSuccess = (lists) => ({
    type: "GET_LIST_SUCCESS",
    payload: lists
}) 
export const getListsFailure = () => ({
    type: "GET_LIST_FAILURE"
})

// create list
export const createListStart = () => ({
    type: "CREATE_LIST_START"
})
export const createListSuccess = (list) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: list
}) 
export const createListFailure = () => ({
    type: "CREATE_LIST_FAILURE"
})

// delete list
export const deleteListsStart = () => ({
    type: "DELETE_LIST_START"
})
export const deleteListsSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id
}) 
export const deleteListsFailure = () => ({
    type: "DELETE_LIST_FAILURE"
})

// update list
export const updateListStart = () => ({
    type: "UPDATE_LIST_START"
})
export const updateListSuccess = (id) => ({
    type: "UPDATE_LIST_SUCCESS",
    payload: id
}) 
export const updateListFailure = () => ({
    type: "UPDATE_LIST_FAILURE"
})