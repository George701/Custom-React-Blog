import {DELETE_POST, INCREMENT, CHANGE_DATE_RANGE, CHANGE_SELECTION} from "../constants";

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

export function changeDateRange(dateRange){
    return{
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}

export function changeSelection(selected){
    return{
        type: CHANGE_SELECTION,
        payload: { selected }
    }

}