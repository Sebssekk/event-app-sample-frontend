import { Stack } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { getAllevents } from "../actions/eventActions";
import { eventReducer, initState } from "../reducers/eventReducers";
import EventReport from "./eventReport";
import { TransitionGroup } from "react-transition-group";
import Delay from "./delay";

const Dashboard = () => {
  const [{ loading, events, error }, dispatch] = useReducer(
    eventReducer,
    initState
  );

  useEffect(() => {
    const getEvents = async () => {
      await getAllevents(dispatch);
    };
    getEvents();
  }, []);

  const eventList = events ? (
    events.map((ev, i) => (
      <Delay key={ev.id} delay={i * 200}>
        <EventReport event={ev} />
      </Delay>
    ))
  ) : (
    <p>No events in the specified data source</p>
  );

  console.log(error);

  return (
    <Stack spacing={1}>
      {error && error.status ? (
        <p style={{ textColor: "red" }}>{error.message}</p>
      ) : loading ? (
        <h3>Loading events ...</h3>
      ) : (
        <TransitionGroup>{eventList}</TransitionGroup>
      )}
    </Stack>
  );
};

export default Dashboard;
