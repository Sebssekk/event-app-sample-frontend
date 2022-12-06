import { Alert, Button, Snackbar, Stack } from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import { getAllevents, cleanMsgAndErr } from "../actions/eventActions";
import { eventReducer, initStateEvent } from "../reducers/eventReducers";

import EventReport from "./eventReport";
import { TransitionGroup } from "react-transition-group";
import AddCircle from "@mui/icons-material/AddCircle";
import Delay from "./delay";
import { Box } from "@mui/system";
import AddOrModifyEventForm from "./addEventForm";

export const EventContext = React.createContext();

const Dashboard = () => {
  const [stateEvent, dispatchEvent] = useReducer(eventReducer, initStateEvent);
  const [openAddEvForm, setOpenAddEvForm] = useState(false);
  const [updateEvent, setUpdateEvent] = useState(null);

  useEffect(() => {
    console.log("GET ALL EVENT");
    const getEvents = async () => {
      await getAllevents(dispatchEvent);
    };
    getEvents();
  }, []);

  const eventList = stateEvent.events ? (
    stateEvent.events.map((ev, i) => (
      <Delay key={ev.id} delay={i * 200}>
        <EventReport
          event={ev}
          setOpenAddEvForm={setOpenAddEvForm}
          setEdit={setUpdateEvent}
        />
      </Delay>
    ))
  ) : (
    <p>No events in the specified data source</p>
  );

  return (
    <Box>
      <EventContext.Provider
        value={{ state: stateEvent, dispatch: dispatchEvent }}
      >
        <AddOrModifyEventForm
          open={openAddEvForm}
          setOpen={setOpenAddEvForm}
          edit={updateEvent}
          setEdit={setUpdateEvent}
        />

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
          {stateEvent.loading ? (
            <h3>Loading events ...</h3>
          ) : (
            <TransitionGroup>{eventList}</TransitionGroup>
          )}
        </Stack>
        <Snackbar
          open={!!(stateEvent && (stateEvent.msg || stateEvent.error))}
          autoHideDuration={5000}
          onClose={() => cleanMsgAndErr(dispatchEvent)}
        >
          <Alert
            severity={stateEvent.error ? "error" : "info"}
            sx={{ width: "100%" }}
          >
            {stateEvent.error
              ? `Error status ${stateEvent.error.status} - ${stateEvent.error.title}`
              : stateEvent.msg}
          </Alert>
        </Snackbar>
      </EventContext.Provider>
    </Box>
  );
};

export default Dashboard;
