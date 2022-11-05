import { Button, Stack } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { getAllevents } from "../actions/eventActions";
import { eventReducer, initState } from "../reducers/eventReducers";
import EventReport from "./eventReport";
import { TransitionGroup } from "react-transition-group";
import AddCircle from "@mui/icons-material/AddCircle";
import Delay from "./delay";
import { Box } from "@mui/system";

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

  return (
    <Box>
      <Button
        variant="contained"
        size="large"
        startIcon={<AddCircle />}
        sx={{
          marginLeft: "80%",
          marginTop: "-100px",
          backgroundColor: "#a4a4a6",
          ":hover": {
            backgroundColor: "#dbdbdb",
          },
        }}
      >
        Add New Event
      </Button>
      <Stack spacing={1}>
        {error && error.status ? (
          <p style={{ textColor: "red" }}>{error.message}</p>
        ) : loading ? (
          <h3>Loading events ...</h3>
        ) : (
          <TransitionGroup>{eventList}</TransitionGroup>
        )}
      </Stack>
    </Box>
  );
};

export default Dashboard;
