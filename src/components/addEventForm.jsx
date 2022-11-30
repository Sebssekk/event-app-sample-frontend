import React, { useState, useContext } from "react";
import { ALARM, INFO, SUCCESS, WARNING } from "../utils/severityTypes";
import { createEvent } from "../actions/eventActions";
import dayjs from "dayjs";
import {
  Modal,
  TextField,
  Button,
  Typography,
  Stack,
  TextareaAutosize,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Box } from "@mui/system";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { severityMapping } from "../utils/severityMapping";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { EventContext } from "./dashboard";

const AddOrModifyEventForm = ({ open, setOpen }) => {
  const [eventToCreate, setEventToCreate] = useState({
    title: "",
    description: "",
    author: "",
    place: "",
    severity: INFO,
    dateTime: dayjs().toISOString().split(".")[0],
  });
  const { state, dispatch } = useContext(EventContext);

  const handleChange = (e, key = null, value = null) => {
    if (key === null) {
      key = e.target.id;
    }
    if (value === null) {
      value = e.target.value;
    }
    setEventToCreate({
      ...eventToCreate,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    console.log("SUBMIT");
    console.log(eventToCreate);
    createEvent(dispatch, eventToCreate);
    setEventToCreate({
      title: "",
      description: "",
      author: "",
      place: "",
      severity: INFO,
      dateTime: dayjs().toISOString().split(".")[0],
    });
  };

  const severityButtonGroup = [SUCCESS, INFO, WARNING, ALARM].map((sev) => {
    const color = sev === ALARM ? "error" : sev.toLowerCase();
    return (
      <FormControlLabel
        key={sev}
        value={sev}
        control={<Radio color={color} />}
        label={sev[0] + sev.substring(1).toLowerCase()}
      />
    );
  });

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        component="form"
        onSubmit={(e) => handleSubmit(e)}
        sx={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "70%",
          alignSelf: "center",
          backgroundColor: "white",
          boxShadow: "2px 2px 5px ",
          paddingLeft: "5%",
          paddingRight: "5%",
          paddingTop: "50px",
          paddingBottom: "50px",
          textAlign: "center",

          //   "& > :not(style)": {
          //     gridColumn: 1,
          //   },
        }}
      >
        <Typography variant="h2">Add a New Event</Typography>
        <br />
        <br />
        <Stack spacing="50px">
          <Stack
            direction="row"
            spacing="100px"
            sx={{
              justifyContent: "center",
            }}
          >
            <TextField
              id="title"
              label="Event Title"
              variant="standard"
              onChange={(e) => handleChange(e)}
              value={eventToCreate.title}
            />
            <TextField
              id="author"
              label="Event Author"
              variant="standard"
              onChange={(e) => handleChange(e)}
              value={eventToCreate.author}
            />
          </Stack>
          <TextareaAutosize
            id="description"
            aria-label="event description"
            minRows={5}
            placeholder="Describe what happened here"
            style={{ paddingTop: "20px", paddingLeft: "10px" }}
            onChange={(e) => handleChange(e)}
            value={eventToCreate.description}
          />
          <FormControl>
            <FormLabel>
              <Stack direction="row" spacing="10px" justifyContent="center">
                <Typography alignSelf="center">Severity :</Typography>{" "}
                {severityMapping(eventToCreate.severity).iconjsx}
              </Stack>
            </FormLabel>
            <RadioGroup
              id="severity"
              onChange={(e) => handleChange(e, "severity")}
              value={eventToCreate.severity}
              row
              aria-labelledby="severity-radio-buttons-group-label"
              name="severity-radio-buttons-group"
              sx={{ justifyContent: "center" }}
            >
              {severityButtonGroup}
            </RadioGroup>
          </FormControl>
          <Stack direction="row" justifyContent="space-evenly" spacing="50%">
            <TextField
              id="place"
              label="Event Location"
              variant="standard"
              value={eventToCreate.place}
              onChange={(e) => handleChange(e)}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="DateTimePicker"
                value={dayjs(eventToCreate.dateTime)}
                onChange={(dateTime) => {
                  handleChange(
                    null,
                    "dateTime",
                    dateTime.toISOString().split(".")[0]
                  );
                }}
              />
            </LocalizationProvider>
          </Stack>
          <Button variant="contained" size="large" type="submit">
            Submit
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default AddOrModifyEventForm;
