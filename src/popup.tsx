import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ChakraProvider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";
import MyCollectionPage from "./popup/components/my-collection";
import Setting from "./popup/components/setting";
import { BookmarkManager } from "./popup/components/bookmark-manager";

const TabStyle = {
  size: "sm",
  variant: "soft-rounded",
  colorScheme: "green",
};

const Popup = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    chrome.action
      .setBadgeText({ text: count.toString() })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.error(err));
  }, [count]);

  return (
    <Tabs {...TabStyle}>
      <TabList>
        <Tab>Bookmark Manager</Tab>
        <Tab>My Collections</Tab>
        <Tab>Setting</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <BookmarkManager />
        </TabPanel>
        <TabPanel>
          <MyCollectionPage />
        </TabPanel>
        <TabPanel>
          <Setting />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Box boxSize="md" p="10px">
        <Popup />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
