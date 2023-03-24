import { Player as ShakaPlayer, ui as ShakaUI, extern as ShakaExtern } from 'shaka-player/dist/shaka-player.ui';
import { SuperConfig } from './enum';

export interface IMediaStatsTime {
  mediaCurrentTime: number | undefined;
  mediaEndTime: number | undefined;
};

export interface IPlayerRefs {
  player: ShakaPlayer;
  ui: ShakaUI.Overlay;
  videoElement: HTMLVideoElement;
};

type IStats = IMediaStatsTime & ShakaExtern.Stats;

export interface IPlayerProps {
  autoPlay?: boolean | undefined;
  children?: any;
  className?: string;
  config?: ShakaExtern.PlayerConfiguration | any;
  onBuffering?(event: boolean): void | undefined;
  onEnded?(): void | undefined;
  onLoad?(data: IPlayerRefs): void | undefined;
  onPause?(): void | undefined;
  onPlay?(): void | undefined;
  onPlayerError?(event: ShakaExtern.Error): void | undefined;
  onStatsChange?(stats: IStats): void | undefined;
  playerClassName?: string;
  playsInline?: boolean | undefined;
  src?: string;
  superConfig?: SuperConfig | undefined;
  uiConfig?: ShakaExtern.UIConfiguration | any;
};
