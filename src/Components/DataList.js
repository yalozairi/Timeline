import React from "react";

//data
import events from "../data";

//styling
import { EventListWrapper } from "../styles";

//components
import DataItem from "./DataItem";

const EventList = () => {
  const eventList = events.map((event) => (
    <DataItem event={event} key={event.id} />
  ));

  return <EventListWrapper>{eventList}</EventListWrapper>;
};

export default EventList;
