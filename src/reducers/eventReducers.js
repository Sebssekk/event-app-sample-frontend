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

export const initStateEvent = {
    loading: false,
    events: [],
    err: {},
    msg: ""
}

export const eventReducer = (state, action) => {
    switch(action.type){
        case GET_ALL_EVENTS_SUCCESS:
            return {loading:false, events:action.payload, error:{}, msg:"Events Successfully fetched."}
        case GET_EVENT_BY_ID_SUCCESS :
        case CREATE_EVENT_SUCCESS :
        case UPDATE_EVENT_SUCCESS:
        case DELETE_EVENT_SUCCESS :
            return {...state, loading:false, msg:"Events Successfully deleted."}
        case IS_LOADING :
            return {...state , loading:true, msg: ""}
        case GET_ALL_EVENTS_ERROR:
            return {loading:false, events:[], error:action.payload, msg:""}
        case EVENT_ERROR:
            return {loading:false, events:[], error:action.payload, msg: ""}
        default:
            return state
    }
}