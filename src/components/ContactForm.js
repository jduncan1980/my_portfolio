import React, { useState } from "react";
import { Button, Label, Input, Flex, Textarea, Text } from "theme-ui";
import axios from "axios";
import { Link } from "gatsby";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { handleSubmit, register, errors, formState } = useForm({
    mode: "onChange",
  });

  const [buttonState, setButtonState] = useState({
    sent: false,
    buttonText: "Send Message",
  });

  const sendEmail = data => {
    setButtonState({ ...buttonState, buttonText: "Sending..." });
    axios({
      method: "POST",
      url: "https://formspree.io/mnqgwgaq",
      data: {
        ...data,
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

  return (
    <Flex
      onSubmit={() => handleSubmit(sendEmail)}
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
        marginBottom: ["200px", "300px"],
      }}
    >
      <Label htmlFor="name">Your Name:</Label>
      <Input ref={register({ required: "Required" })} name="name" id="name" />
      {errors.name && <Text variant="error">{errors.name.message}</Text>}

      <Label htmlFor="email">Your Email:</Label>
      <Input
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid Email Address",
          },
        })}
        name="email"
        id="email"
      />
      {errors.email && <Text variant="error">{errors.email.message}</Text>}

      <Label htmlFor="message">Message:</Label>
      <Textarea
        ref={register({ required: "Required" })}
        name="message"
        id="message"
      />
      {errors.message && <Text variant="error">{errors.message.message}</Text>}

      <Button
        type="submit"
        disabled={!formState.isValid}
        sx={{
          bg: "secondary",
          marginTop: "30px",
          cursor: "pointer",
          fontSize: 2,
          transition: "all .25s ease",
          boxShadow: "2px 2px 1px 1px rgba(232,216,232,0.25)",

          "&:hover": {
            transform: "scale(1.1)",
          },
          "&:active:": {
            boxShadow: "none",
          },
          "&:disabled": {
            bg: "gray",
          },
        }}
      >
        {buttonState.buttonText}
      </Button>
      {buttonState.sent && <Link to="/">Thank You! Go back Home </Link>}
    </Flex>
  );
}
