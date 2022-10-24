import { GET_ALL_EVENTS_SUCCESS, GET_ALL_EVENTS_ERROR, IS_LOADING } from "./actionTypes"

export const getAllevents = async (dispatch) => {
    dispatch({type: IS_LOADING})
    try{
        const events = [
            {
                id : 0,
                title : "event Title",
                description: "the event description, that can be very verbose and asdfoadfioajsdio sadfjoaspi saiod sioa osihdfoas oasidf sajfoaishdf oasdop daisodfo asdfhias oasih foiasjdfoias sa dfiasiodf asidfioas dfas iasudfioasd asiod asiodj oiasiodcas idcoaios dfasiodf as ciujasiopudi sadasdasdsda.",
                date: "10/02/2012",
                place: "Server room",
                severity: "WARNING",
                author: "Ben Robinson"
            },
            {
                id : 1,
                title : "event Title",
                description: "the event description, that can be very verbose and asdfoadfioajsdio sadfjoaspi saiod sioa osihdfoas oasidf sajfoaishdf oasdop daisodfo asdfhias oasih foiasjdfoias sa dfiasiodf asidfioas dfas iasudfioasd asiod asiodj oiasiodcas idcoaios dfasiodf as ciujasiopudi sadasdasdsda.",
                date: "10/02/2012",
                place: "Server room",
                severity: "INFO",
                author: "Ben Robinson"
            },
            {
                id : 2,
                title : "event Title",
                description: "the event description, that can be very verbose and asdfoadfioajsdio sadfjoaspi saiod sioa osihdfoas oasidf sajfoaishdf oasdop daisodfo asdfhias oasih foiasjdfoias sa dfiasiodf asidfioas dfas iasudfioasd asiod asiodj oiasiodcas idcoaios dfasiodf as ciujasiopudi sadasdasdsda.",
                date: "10/02/2012",
                place: "Server room",
                severity: "ALARM",
                author: "Ben Robinson"
            },
            {
                id : 3,
                title : "event Title",
                description: "the event description, that can be very verbose and asdfoadfioajsdio sadfjoaspi saiod sioa osihdfoas oasidf sajfoaishdf oasdop daisodfo asdfhias oasih foiasjdfoias sa dfiasiodf asidfioas dfas iasudfioasd asiod asiodj oiasiodcas idcoaios dfasiodf as ciujasiopudi sadasdasdsda.",
                date: "10/02/2012",
                place: "Server room",
                severity: "SUCCESS",
                author: "Ben Robinson"
            },
            {
                id : 4,
                title : "event Title",
                description: "the event description, that can be very verbose and asdfoadfioajsdio sadfjoaspi saiod sioa osihdfoas oasidf sajfoaishdf oasdop daisodfo asdfhias oasih foiasjdfoias sa dfiasiodf asidfioas dfas iasudfioasd asiod asiodj oiasiodcas idcoaios dfasiodf as ciujasiopudi sadasdasdsda.",
                date: "10/02/2012",
                place: "Server room",
                severity: "WARNING",
                author: "Ben Robinson"
            },
            {
                id : 5,
                title : "event Title",
                description: "the event description, that can be very verbose and asdfoadfioajsdio sadfjoaspi saiod sioa osihdfoas oasidf sajfoaishdf oasdop daisodfo asdfhias oasih foiasjdfoias sa dfiasiodf asidfioas dfas iasudfioasd asiod asiodj oiasiodcas idcoaios dfasiodf as ciujasiopudi sadasdasdsda.",
                date: "10/02/2012",
                place: "Server room",
                severity: "INFO",
                author: "Ben Robinson"
            },
            {
                id : 6,
                title : "event Title",
                description: "the event description, that can be very verbose and asdfoadfioajsdio sadfjoaspi saiod sioa osihdfoas oasidf sajfoaishdf oasdop daisodfo asdfhias oasih foiasjdfoias sa dfiasiodf asidfioas dfas iasudfioasd asiod asiodj oiasiodcas idcoaios dfasiodf as ciujasiopudi sadasdasdsda.",
                date: "10/02/2012",
                place: "Server room",
                severity: "ALARM",
                author: "Ben Robinson"
            }
        ]
        dispatch({type: GET_ALL_EVENTS_SUCCESS, payload:events})
    }
    catch (err) {
        console.log("[x] Error in GET_ALL_EVENTS")
        dispatch({type:GET_ALL_EVENTS_ERROR, payload:err})
    }
}
export const getEventById = async (id) => {}
export const createEvent = async (event) => {}
export const updateEvent = async (event) => {}
export const deleteEvent = async (id) => {}