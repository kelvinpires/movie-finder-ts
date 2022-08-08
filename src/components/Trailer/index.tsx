import React from "react";
import { CloseWrapper, Container, Wrapper } from "./styles";

import { Player, DefaultUi, Youtube } from "@vime/react";
import "@vime/core/themes/default.css";
import { X } from "phosphor-react";

type TrailerProps = {
  videoId: string;
  setShowTrailer: (state: boolean) => void;
};

export const Trailer = ({ videoId, setShowTrailer }: TrailerProps) => {
  return (
    <Container>
      <CloseWrapper onClick={() => setShowTrailer(false)}>
        <X size={40} weight="bold" />
      </CloseWrapper>
      <Wrapper>
        <Player onVmPlaybackEnded={() => setShowTrailer(false)}>
          <Youtube videoId={videoId} key={videoId} />
          <DefaultUi />
        </Player>
      </Wrapper>
    </Container>
  );
};
