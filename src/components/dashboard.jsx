import { Button, Stack } from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import { getAllevents } from "../actions/eventActions";
import { eventReducer, initStateEvent } from "../reducers/eventReducers";

import EventReport from "./eventReport";
import { TransitionGroup } from "react-transition-group";
import AddCircle from "@mui/icons-material/AddCircle";
import Delay from "./delay";
import { Box } from "@mui/system";
import AddOrModifyEventForm from "./addEventForm";

const Dashboard = () => {
  const [{ loading, events, error }, dispatchEvent] = useReducer(
    eventReducer,
    initStateEvent
  );
  const [openAddEvForm, setOpenAddEvForm] = useState(true);

  useEffect(() => {
    const getEvents = async () => {
      await getAllevents(dispatchEvent);
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
      <AddOrModifyEventForm open={openAddEvForm} setOpen={setOpenAddEvForm} />
      <Button
        variant="contained"
        size="large"
        startIcon={<AddCircle />}
        onClick={() => setOpenAddEvForm(true)}
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
