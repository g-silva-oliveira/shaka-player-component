const vodConfig = {
  ui: {
    controlPanelElements: ["play_pause", "time_and_duration", "mute", "fullscreen"]
  },
};

const streamingConfig = {
  player: {
    manifes: {
      dash: {
        ignoreMinBufferTime: true,
      },
    },
    streaming: {
      lowLatencyMode: true,
      inaccurateManifestTolerance: 0,
      rebufferingGoal: 1,
      smallGapLimit: 1,
      jumpLargeGaps: true,
      durationBackoff: 0
    },
  },
  ui: {
    addSeekBar: false,
    controlPanelElements: ["time_and_duration", "mute", "fullscreen"],
  },
};

export { vodConfig, streamingConfig };
