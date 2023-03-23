import { Player as ShakaPlayer, ui as ShakaUI } from "shaka-player/dist/shaka-player.ui";
import React, { useState, useEffect } from "react";
import * as Configs from "../configs";

import { IPlayerProps } from "../types";
import { SuperConfig } from "../types/enum";

const useUI = (
  player: ShakaPlayer,
  videoRef: React.MutableRefObject<HTMLVideoElement>,
  uiContainerRef: React.MutableRefObject<HTMLDivElement>,
  props?: IPlayerProps
) => {
  const [ui, setUi] = useState<ShakaUI.Overlay | null>(null);

  useEffect(() => {
    if (player) {
      const ui = new ShakaUI.Overlay(player, uiContainerRef.current, videoRef.current);
      setUi(ui);
    }

    return () => {
      if (ui) {
        ui.destroy();
      }
    };
  }, [player]);

  useEffect(() => {
    if (ui && props.uiConfig) {
      ui.configure(props.uiConfig);
    } else if (ui && props.superConfig) {
      switch (props.superConfig) {
        case SuperConfig.STREAMING:
          ui.configure(Configs.streamingConfig);
          break;
        case SuperConfig.VOD:
          ui.configure(Configs.vodConfig);
          break;
        default:
          ui.configure({});
          break;
      }
    }
  }, [ui, props]);

  return ui;
};

export default useUI;
