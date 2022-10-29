import { GET_ALL_EVENTS_SUCCESS, GET_ALL_EVENTS_ERROR, IS_LOADING } from "./actionTypes"
import mockEvents from "../mockData"

export const getAllevents = async (dispatch) => {
    dispatch({type: IS_LOADING})
    try{
        if (process.env.NODE_ENV==='development'){
            dispatch({type: GET_ALL_EVENTS_SUCCESS, payload:mockEvents})
            return
        }
        const res = await fetch("/api/events/")
       
        if (res.ok){
            const data = await res.json()
            dispatch({type: GET_ALL_EVENTS_SUCCESS, payload:data})
        }
        else {
            const err = await res.text()
            throw { status: res.status, title:res.statusText ,message: err}
        }
    }
    catch (err) {
        dispatch(
        {
            type:GET_ALL_EVENTS_ERROR, 
            payload:{
                status:err.status || 500 , 
                message:err.message || `${err.stack}`,
                title: err.title || "Generic Error"
            }
        })
    }
}
export const getEventById = async (id) => {}
export const createEvent = async (event) => {}
export const updateEvent = async (event) => {}
export const deleteEvent = async (id) => {}