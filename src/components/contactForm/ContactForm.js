import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label for="name">Name:</label>
      <input name="name" id="name" required type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <label for="phone">Phone:</label>
      <input name="phone" id="phone" required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}/>
      <label for="email">Email:</label>
      <input name="email" id="email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="submit" value="Add Contact"/>
    </form>
    </>
  );
};

