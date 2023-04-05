import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import { CardStyle } from "../../commonStyle";

export const Setting = () => {
  return (
    <Card {...CardStyle}>
      <CardHeader>
        <Heading size="md">Setting</Heading>
      </CardHeader>
      <CardBody></CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default Setting;
