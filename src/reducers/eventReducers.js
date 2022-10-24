import { 
    IS_LOADING,
    EVENT_ERROR,
    GET_ALL_EVENTS_SUCCESS,
    GET_EVENT_BY_ID_SUCCESS,
    CREATE_EVENT_SUCCESS,
    UPDATE_EVENT_SUCCESS,
    DELETE_EVENT_SUCCESS,
    GET_ALL_EVENTS_ERROR
} from "../actions/actionTypes";

export const initState = {
    loading: false,
    events: [],
    err: {}
}

export const eventReducer = (state, action) => {
    switch(action.type){
        case GET_ALL_EVENTS_SUCCESS:
            return {loading:false, events:action.payload, error:{}}
        case GET_EVENT_BY_ID_SUCCESS :
        case CREATE_EVENT_SUCCESS :
        case UPDATE_EVENT_SUCCESS:
        case DELETE_EVENT_SUCCESS :
            return {loading:false, events:[action.payload], error:{}}
        case IS_LOADING :
            return {loading:true, events:[], error:{}}
        case GET_ALL_EVENTS_ERROR:
        case EVENT_ERROR :
            return {loading:false, events:[], error:action.payload}
        default:
            return state
    }
}