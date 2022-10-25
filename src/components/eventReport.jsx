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
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {event.title}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {event.author}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{event.description}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default EventReport;
