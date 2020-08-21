import React from "react";
import { Button, Label, Input, Flex, Textarea, Text } from "theme-ui";
import axios from "axios";
import { useForm } from "react-hook-form";
import SentAnimation from "./SentAnimation";
import { Link } from "gatsby";

export default function ContactForm() {
  const { handleSubmit, register, errors, formState } = useForm({
    mode: "onChange",
  });

  const sendEmail = data => {
    axios({
      method: "POST",
      url: "https://formspree.io/mnqgwgaq",
      data: {
        ...data,
      },
    })
      .then(res => {
        console.log(res);
        // reset();
      })
      .catch(error => {
        console.log(error);
        alert(`Something Went Wrong! Please Try Again!`);
      });
  };
  if (formState.isSubmitted) {
    return (
      <Flex
        sx={{
          flexDirection: "column",
          fontSize: [3, null, 4],
          color: "secondary",
          marginTop: "10px",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
          minHeight: "100px",
        }}
      >
        <Text sx={{ textAlign: "center" }}>
          Thank You! Your message has been sent!
        </Text>
        <Link to="/" sx={{ textDecoration: "none" }}>
          Go Back Home
        </Link>
        <SentAnimation />
      </Flex>
    );
  }

  return (
    <Flex
      onSubmit={handleSubmit(sendEmail)}
      as="form"
      sx={{
        flexDirection: ["column", null, null, "row"],
        alignItems: ["center", null, null, "flex-start"],
        justifyContent: "space-around",
        minWidth: ["90%", null, "60%"],
        bg: "primary",
        padding: "30px",
        borderRadius: "10px",
        marginTop: "20px",
        color: "white",
        boxShadow: "10px 10px 48px 0px rgba(0,0,0,0.5)",
      }}
    >
      <Flex sx={{ flexDirection: "column", width: ["90%", null, null, "30%"] }}>
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
      </Flex>

      <Flex sx={{ flexDirection: "column", width: ["90%", null, null, "40%"] }}>
        <Label htmlFor="message">Message:</Label>
        <Textarea
          ref={register({ required: "Required" })}
          name="message"
          id="message"
        />
        {errors.message && (
          <Text variant="error">{errors.message.message}</Text>
        )}

        <Button
          type="submit"
          disabled={!formState.isValid}
          sx={{
            bg: "secondary",
            margin: "30px auto 0 auto",
            cursor: "pointer",
            fontSize: 2,
            width: "50%",
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
          {formState.isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </Flex>
    </Flex>
  );
}
