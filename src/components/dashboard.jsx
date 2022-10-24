import React, { useEffect, useReducer } from "react";
import { getAllevents } from "../actions/eventActions";
import { eventReducer, initState } from "../reducers/eventReducers";

const Dashboard = () => {
  const [eventState, dispatch] = useReducer(eventReducer, initState);

  useEffect(() => {
    const getEvents = async () => {
      await getAllevents(dispatch);
    };
    getEvents();
  }, []);

  const eventList = eventState.events ? (
    eventState.events.map((ev) => (
      <React.Fragment key={ev.id}>
        <div>
          <h3>{ev.title}</h3>
          <p>{ev.description}</p>
        </div>
        <hr />
      </React.Fragment>
    ))
  ) : (
    <h3>Loading events ...</h3>
  );

  return (
    <div>
      <hr />
      {eventList}
    </div>
  );
};

export default Dashboard;
