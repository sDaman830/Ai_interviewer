// Timer.jsx
import React, { useEffect, useState } from "react";
import { selectIsConnectedToRoom, useHMSStore } from "@100mslive/react-sdk";
// ConferencingHeader.jsx
import { Flex, VerticalDivider } from "@100mslive/roomkit-react";
import { Logo, SpeakerTag } from "./HeaderComponents";
import { ParticipantCount } from "./ParticipantList";
import { MyStopwatch } from "./Stopwatch";
import { StreamActions } from "./StreamActions";
import MainLogo from "./MainLogo";

// eslint-disable-next-line react-hooks/rules-of-hooks


export const ConferencingHeader = ({ isPreview }) => {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  return (
    <Flex
      justify="between"
      align="center"
      css={{ position: "relative", height: "100%" }}
    >
      <Flex align="center">
        {" "}
        {/* Changed to Flex for inline elements */}
        {/* <Logo /> */}

        {/* <img
          src="/Users/damanpreetsinghghatoura/Desktop/100ms-web/src/components/Header/mainLogo.svg"
          alt="Main Logo"
          className="svg"
        /> */}
        <MainLogo style={{ width: 80, height: 70 }} />
        {isConnected && (
          <MyStopwatch css={{ marginLeft: "$300" }} />
        )}{" "}
        {/* Margin-left for spacing */}
        <VerticalDivider css={{ ml: "$20" }} />
        {!isPreview ? <SpeakerTag /> : null}
      </Flex>
      <Flex
        align="center"
        css={{
          position: "absolute",
          right: "$10",
          gap: "$4",
        }}
      >
        <StreamActions />
        <ParticipantCount />
      </Flex>
      {/* Use Timer component and pass onUpdate function */}
    </Flex>
  );
};
