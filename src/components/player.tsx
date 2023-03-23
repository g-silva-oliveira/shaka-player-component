import React, { useRef } from 'react';
import * as Hooks from '../hooks';

import { IPlayerProps } from '../types';

const ReactPlayer = (props: IPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const uiContainerRef = useRef<HTMLDivElement | null>(null);

  const { player, ui } = Hooks.usePlayer(videoRef, uiContainerRef, props);
  Hooks.usePlayerListener(player, props);
  Hooks.useUIListener(ui, player, props);
  Hooks.useStats(player, props);

  const {
    className,
    config,
    onBuffering,
    onEnded,
    onLoad,
    onPause,
    onPlay,
    onPlayerError,
    onStatsChange,
    playerClassName,
    superConfig,
    uiConfig,
    ...newProps
  } = props;

  const style = {
    maxWidth: "100%",
    width: "100%",
  };

  const overlayClassName = className === undefined ? "mk-theme" : "mk-theme " + props.className;

  return (
    <div style={style} ref={uiContainerRef} className={overlayClassName}>
      <video
        ref={videoRef}
        className={props.playerClassName}
        style={style}
        {...newProps}
      />
    </div>
  );
};

export { ReactPlayer };
