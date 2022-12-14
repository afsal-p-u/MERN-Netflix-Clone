import { 
    createListFailure,
    createListStart,
    createListSuccess,
    deleteListsFailure,
    deleteListsStart,
    deleteListsSuccess,
    getListsFailure, 
    getListsStart, 
    getListsSuccess 
} from "./ListActions";

import axios from 'axios'

// get 
export const getLists = async (dispatch) => {
    dispatch(getListsStart())
    try{
        const res = await axios.get("/lists",
        { headers: { 
            token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken
        } 
    })
    dispatch(getListsSuccess(res.data))
    }catch(err){
        dispatch(getListsFailure()) 
    }
}

//create
export const createList = async (list, dispatch) => {
    dispatch(createListStart())
    try{
        const res = await axios.post("/lists/", list ,
        { headers: { 
            token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken
        } 
    })
    dispatch(createListSuccess(res.data)) 
    }catch(err){
        dispatch(createListFailure())
    }
}

//delete
export const deleteList = async (id, dispatch) => {
    dispatch(deleteListsStart())
    try{
        await axios.delete("/lists/"+id ,
        { headers: { 
            token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken
        } 
    })
    dispatch(deleteListsSuccess(id))
    }catch(err){
        dispatch(deleteListsFailure())
    }
}