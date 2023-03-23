import { Player as ShakaPlayer, ui as ShakaUI } from "shaka-player/dist/shaka-player.ui";
import { useEffect } from "react";

import { IPlayerProps } from "../types";

const useUILIstener = (
  ui: ShakaUI.Overlay,
  player: ShakaPlayer,
  props?: IPlayerProps
) => {
  useEffect(() => {
    if (player && ui) {
      const mediaElement = player.getMediaElement();
      const _onPlay = () => {
        props.onPlay && props.onPlay();
      };
      const _onPause = () => {
        props.onPause && props.onPause();
      };
      const _onEnded = () => {
        props.onEnded && props.onEnded();
      };

      mediaElement.addEventListener("play", _onPlay);
      mediaElement.addEventListener("pause", _onPause);
      mediaElement.addEventListener("ended", _onEnded);
    }
  }, [player, ui])
};

export default useUILIstener;
