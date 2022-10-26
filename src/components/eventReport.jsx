import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const EventReport = ({ event }) => {
  return (
    <div>
      <Accordion
        sx={{
          backgroundColor: "lightgrey",
          margin: 5,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`event-${event.id}panel-content`}
          id={`event-${event.id}panel-header`}
        >
          <div style={{ backgroundColor: "blue" }}>ble</div>
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
    </div>
  );
};

export default EventReport;
