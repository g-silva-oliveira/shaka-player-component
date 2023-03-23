import { Player as ShakaPlayer, extern as ShakaExtern } from "shaka-player/dist/shaka-player.ui";
import { useEffect } from "react";

import { IPlayerProps } from "../types";

const usePlayerListener = (player: ShakaPlayer, props?: IPlayerProps) => {

  useEffect(() => {
    const _onPlayerErrorEvent = (error: ShakaExtern.Error | any) => {
      props.onPlayerError && props.onPlayerError(error);
    }
    const _onBufferingEvent = (bufferStatus: any) => {
      const boolOfBuffering: boolean = bufferStatus.buffering
      props.onBuffering && props.onBuffering(boolOfBuffering);
    };

    if (player) {
      player.addEventListener("error", _onPlayerErrorEvent);
      player.addEventListener("buffering", _onBufferingEvent);
    }
  }, [player]);
};

export default usePlayerListener;
