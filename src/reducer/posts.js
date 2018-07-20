import {articles as defaultPosts} from '../API/articles';
import {DELETE_POST} from "../constants";

export default (postState = defaultPosts, action) => {
    const {type, payload} = action;

    switch(type){
        case DELETE_POST: return postState.filter(article => article.id !== payload.id);
        default: return postState;
    }

}