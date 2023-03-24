const vodConfig = {
  ui: {
    controlPanelElements: [
      'play_pause',
      'rewind',
      'fast_forward',
      'mute',
      'volume',
      'time_and_duration',
      'spacer',
      'overflow_menu',
      'fullscreen',
    ]
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
