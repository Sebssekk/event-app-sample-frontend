import React, { useEffect, useReducer } from "react";
import { getAllevents } from "../actions/eventActions";
import { eventReducer, initState } from "../reducers/eventReducers";
import EventReport from "./eventReport";

const Dashboard = () => {
  const [{ loading, events, err }, dispatch] = useReducer(
    eventReducer,
    initState
  );

  useEffect(() => {
    const getEvents = async () => {
      await getAllevents(dispatch);
    };
    getEvents();
  }, []);

  const eventList = loading ? (
    <h3>Loading events ...</h3>
  ) : events ? (
    events.map((ev) => (
      <React.Fragment key={ev.id}>
        <EventReport event={ev} />
      </React.Fragment>
    ))
  ) : (
    <p>No events in the specified data source</p>
  );

  return (
    <div>
      <hr />
      {eventList}
    </div>
  );
};

export default Dashboard;
