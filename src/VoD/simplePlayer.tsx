import React, { useEffect, useRef } from 'react';

import 'shaka-player/dist/controls.css'; /* Shaka player CSS import */

const shaka = require('shaka-player/dist/shaka-player.ui.js');

export interface ISimplePlayer extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  videoId?: string;
  className?: string;
  width?: string;
  manifestUrl?: string;
};

export const SimplePlayer: React.FunctionComponent<ISimplePlayer> = (props) => {
  const { children, width, videoId, className, style, manifestUrl } = props;
  const video = useRef(null);
  const videoContainer = useRef(null);

  let _style: React.CSSProperties = style || {};

  /** Override Defaults */
  if (width) _style.width == width;

  useEffect(() => {
    const manifestUri = manifestUrl;
    const player = new shaka.Player(video.current);
    const ui = new shaka.ui.Overlay(player, videoContainer.current, video.current);
    const uiConfig = {
      addSeekBar: true,
      skip: true,
      seekBarColors: {
        base: "rgba(255, 255, 255, 0.3)",
        buffered: "rgba(255, 255, 255, 0.54)",
        played: "rgb(255, 255, 255)",
      },
    };

    ui.configure(uiConfig); //configure UI
    ui.getControls();

    const onError = (error: { code: string }) => {
      console.error('Error code', error.code, 'object', error);
    }

    player.load(manifestUri).then(function () {
      console.log('The video has now been loaded!');
    }).catch(onError);
  }, [manifestUrl]);

  return (
    <div className={className} ref={videoContainer} style={_style} {...props}>
      <video
        id={!videoId ? "video" : videoId}
        ref={video}
        style={{ width: '100%', height: '100%' }}
      />
      {children}
    </div>
  )
};
