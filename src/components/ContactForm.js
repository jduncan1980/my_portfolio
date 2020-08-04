import React, { useState } from "react";
import { Button, Label, Input, Flex, Textarea } from "theme-ui";
import axios from "axios";
import { Link } from "gatsby";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [buttonState, setButtonState] = useState({
    sent: false,
    buttonText: "Send Message",
  });

  const resetForm = () => {
    setFormState({
      name: "",
      message: "",
      email: "",
    });
  };

  const sendEmail = () => {
    setButtonState({ ...buttonState, buttonText: "Sending..." });
    axios({
      method: "POST",
      url: "https://formspree.io/mnqgwgaq",
      data: {
        name: formState.name,
        email: formState.email,
        message: formState.message,
      },
    })
      .then(res => {
        console.log(res);
        setButtonState({ sent: true, buttonText: "Sent!" });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    sendEmail();
    resetForm();
  };

  return (
    <Flex
      onSubmit={handleSubmit}
      as="form"
      sx={{
        flexDirection: "column",
        alignItems: "center",
        minWidth: ["90%", null, "60%", "50%", "40%"],
        bg: "primary",
        padding: "40px",
        borderRadius: "10px",
        marginY: "50px",
        color: "white",
        marginBottom: "200px",
      }}
    >
      <Label htmlFor="name">Your Name:</Label>
      <Input
        name="name"
        id="name"
        value={formState.name}
        onChange={handleChange}
      />
      <Label htmlFor="email">Your Email:</Label>
      <Input
        name="email"
        id="email"
        value={formState.email}
        onChange={handleChange}
      />
      <Label htmlFor="message">Message:</Label>
      <Textarea
        name="message"
        id="message"
        value={formState.message}
        onChange={handleChange}
      />
      <Button
        type="submit"
        sx={{
          bg: "secondary",
          marginTop: "15px",
          cursor: "pointer",
          fontSize: 2,
          transition: "all .25s ease",

          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        {buttonState.buttonText}
      </Button>
      {buttonState.sent && <Link to="/">Thank You! Go back Home </Link>}
    </Flex>
  );
}
