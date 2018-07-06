import {DELETE_POST, INCREMENT} from "../constants";

export function increment(){
    return{
        type: INCREMENT
    }
}

export function deletePost(id){
    return{
        type: DELETE_POST,
        payload: { id }
    }
}