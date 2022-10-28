import { Stack } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { getAllevents } from "../actions/eventActions";
import { eventReducer, initState } from "../reducers/eventReducers";
import EventReport from "./eventReport";
import { TransitionGroup } from "react-transition-group";
import Delay from "./delay";

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
    events.map((ev, i) => (
      <Delay key={ev.id} delay={i * 200}>
        <EventReport event={ev} />
      </Delay>
    ))
  ) : (
    <p>No events in the specified data source</p>
  );

  return (
    <Stack spacing={1}>
      {" "}
      <TransitionGroup> {eventList}</TransitionGroup>
    </Stack>
  );
};

export default Dashboard;
