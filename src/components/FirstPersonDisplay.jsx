import React from "react";
import { Box, Flex, Text } from "@100mslive/roomkit-react";
import PlaceholderBg from "../images/first_person.png";

export const FirstPersonDisplay = React.memo(() => {
  return (
    
      <Flex
        align="center"
        direction="column"
        css={{
          position: "absolute",
          w: "100%",
          top: "4%",
          left: 0,
          textAlign: "center",
        }}
      >
        {/* <Text
          color="white"
          variant="h4"
          fontSize="$sm"
          css={{ "@md": { fontSize: "$sm" } }}
        >
          
        </Text> */}
        <Text
          color="white"
          variant="h5"
          css={{ mt: "$4", "@md": { fontSize: "$sm", variant: "h6" } }}
        >  
        </Text>
        {/* <Text
          color="white"
          variant="h6"
          
          css={{ mt: "$2", "@md": { fontSize: "$sm" } }}
        >
          Sit back and relax till the others join.
        </Text> */}
      </Flex>
  
  );
});
