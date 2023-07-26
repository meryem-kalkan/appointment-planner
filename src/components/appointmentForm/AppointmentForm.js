import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label for="name">Name:</label>
      <input required name="name" id="name" type="text" value={name} onChange={(e) => setTitle(e.target.value)}/>
      <label for="contact">Contact:</label>
      <ContactPicker contacts={contactNames} name="contact" value={contact} onChange={(e) => setContact(e.target.value)} />
      <label for="date">Date:</label>
      <input name="date" required id="date" type="date" min={getTodayString} value={date} onChange={(e) => setDate(e.target.value)}/>
      <label for="time">Time:</label>
      <input name="time" required id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)}/>
      <input type="submit"/>
    </form>
    
    </>
  );
};
