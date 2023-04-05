import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import { CardStyle } from "../../commonStyle";
import BookmarkDataTable from "./BookmarkDataTable";

export const MyCollectionPage = () => {
  return (
    <Card {...CardStyle}>
      <CardHeader>
        <Heading size="md">My Collections</Heading>
      </CardHeader>
      <CardBody>
        <BookmarkDataTable />
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default MyCollectionPage;
