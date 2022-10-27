import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slide from "@mui/material/Slide";
import { severityMapping } from "../utils/severityMapping";

const EventReport = ({ event }) => {
  const severityMap = severityMapping(event.severity);
  return (
    <Slide
      direction="right"
      in={true}
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 600 }}
      easing={{ enter: " cubic-bezier(0.34, 1.56, 0.64, 1)", exit: "linear" }}
    >
      <Accordion
        sx={{
          backgroundColor: severityMap.color,
          margin: "0.5% 3%",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`event-${event.id}panel-content`}
          id={`event-${event.id}panel-header`}
        >
          {severityMap.iconjsx}
          <Typography
            variant="h4"
            fontWeight="bold"
            width="33%"
            textAlign="start"
            paddingLeft="25px"
          >
            {event.title}
          </Typography>
          <Typography variant="h5" width="33%">
            {event.place}
          </Typography>
          <Typography textAlign="end" width="30%" fontWeight="bold">
            {event.date}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign="left" fontWeight="bold">
            Severity: {event.severity}
          </Typography>
          <Typography textAlign="left" fontWeight="bold">
            Description:
          </Typography>
          <Typography padding="0 10%">{event.description}</Typography>
          <Typography textAlign="end"> &#x2022; {event.author}</Typography>
        </AccordionDetails>
      </Accordion>
    </Slide>
  );
};

export default EventReport;
