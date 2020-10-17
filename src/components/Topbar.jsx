import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";

export default function Topbar({ setReddit }) {
  const { handleSubmit, register } = useForm();
  const onSubmit = (values) => {
    //pass values to reddit component
    setReddit(values.subreddit);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">reddit-pics</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="https://www.github.com/nrowley">
          <FaGithub />
        </Nav.Link>
      </Nav>
      <Form onSubmit={handleSubmit(onSubmit)} inline>
        <FormControl name="subreddit" type="text" placeholder="Search" className="mr-sm-2" ref={register({ required: "Enter a subreddit to search!" })} />
        <Button variant="outline-info" type="submit">
          Search
        </Button>
      </Form>
    </Navbar>
  );
}
