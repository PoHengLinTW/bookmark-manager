import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import { CardStyle } from "../../commonStyle";

export const BookmarkManager = () => {
  const [currentURL, setCurrentURL] = useState<string>();

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      setCurrentURL(tabs[0].url);
    });
  }, []);

  return (
    <Card {...CardStyle}>
      <CardHeader>
        <Heading size="md">Bookmark Manager</Heading>
      </CardHeader>
      <CardBody>Current URL: {currentURL}</CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default BookmarkManager;
