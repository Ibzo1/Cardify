import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionPanel({title, content}) {
    return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
      )
}

export default function SimpleAccordion(props) {
  return (
    <div>
      {
    props.panels.map((panel, index) => 
          <AccordionPanel key={index} title={panel.title} content={panel.content} />
        )
      }
    </div>
  );
}