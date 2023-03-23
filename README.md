<h2 align="center">
  <a href="https://github.com/g-silva-oliveira/shaka-player-component.git" title="GitHub Page for Component Package with Shaka Player">
    <img
      src="public/assets/pack-man-128.png"
      style="display: block; margin-left: auto; margin-right: auto; width: 100px"
    />
  </a>
  <span style="color: #9B5DE5">Sha</span><span style="color:#F15BB5">ka</span><span style="color:#FEE440">Play</span><span style="color:#00BBF9">er Co</span><span style="color:#00F5D4">mpo</span><span>nent</span>
</h2>

_Shaka Player Component_ é uma biblioteca privada em TypeScript para mídias adaptativas. Ela reproduz formatos de mídias adaptativas (como [DASH][] e [HLS][]) no browser, sem usar plugins ou Flash. Ao
invés, o _Shaka Player Component_ usa a biblioteca JavaScript de código-aberto [Shaka Player][].

Nosso principal objetivo é facilitar, na medida do possível, a transmissão de bitrate videos e audios adaptativos usando as melhores propriedades e métodos que a biblioteca [Shaka Player][] oferece.
Nos esforçamos para manter a biblioteca leve, simples e livre de outras dependencias. Tudo o que você precisa para construir seu código já está na fonte.

![npm](https://img.shields.io/npm/v/shaka-player?label=shaka-player)

[shaka player]: https://shaka-player-demo.appspot.com/demo/
[dash]: https://dashif.org/
[hls]: https://developer.apple.com/streaming/

## Installation

Use the package manager [yarn](https://classic.yarnpkg.com/en/) or [npm](https://www.npmjs.com/) to install `shaka-player-component`.

```bash
yarn add shaka-player-component

or

npm install shaka-player-component
```

## Usage

```javascript
// import the css. Now we have custom ui.css
// NextJs has this css import at the _app
import 'shaka-player-component/dist/ui.css';
import { ReactPlayer } from 'shaka-player-component';

function App() {
  return <ReactPlayer autoPlay={true} src={'https://yourvideohere.mpd'} />;
}
```

## Manual Handle Usage

```javascript
import 'shaka-player-component/dist/ui.css';
import { ReactPlayer } from 'shaka-player-component';

function App() {
  let [mainPlayer, setMainPlayer] = useState({});

  useEffect(() => {
    const { player, videoElement } = mainPlayer;

    if (player) {
      async function play() {
        await player.load('https://yourvideomaster.mpd');
        videoElement.play();
      }
      play();
    }
  }, [mainPlayer]);

  return (
    <div className="App">
      <div className="App-main">
        <ReactPlayer playerClassName="player-class-name" onLoad={(player) => setMainPlayer(player)} />
      </div>
    </div>
  );
}
```

---

## Library support matrix

|   Library    | DASH  |  HLS  | WORKING |
| :----------: | :---: | :---: | :-----: |
|    React     | **Y** | **Y** |    -    |
| React Native |   -   |   -   |  **Y**  |
|   Angular    |   -   |   -   |    -    |
|     Vue      |   -   |   -   |    -    |
|    Svelt     |   -   |   -   |    -    |

<!-- ## DASH features

## HLS features

## DRM support matrix -->

---

## Props

This is main props for the components:

| Props          | Optional | Description                                                                                                                                                                                                                       | Type                         |
| -------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| src            | No       | MPD or HLS to play                                                                                                                                                                                                                | string                       |
| className      | Yes      | string of ui overlay classname                                                                                                                                                                                                    | string                       |
| autoPlay       | Yes      | as it described                                                                                                                                                                                                                   | boolean                      |
| superConfig    | Yes      | The special configs for Streaming or VOD. Will add more `superConfig` soon.                                                                                                                                                       | string ("STREAMING" / "VOD") |
| config         | Yes      | Changes configuration settings on Shaka Player. Reference: [shaka.extern.PlayerConfiguration][]. This config will override `superConfig`.                                                                                         | object                       |
| uiConfig       | Yes      | Changes configuration settings for UI elements. Reference: [shaka.extern.UIConfiguration][]. This config will override `superConfig`.                                                                                             | object                       |
| onLoad         | Yes      | Catch `Shaka.Player`, `Shaka.ui.Overlay` and `HTMLVideoElement` for manual usages or improvement of configuration. see: [PlayerRefs][]                                                                                            | object: PlayerRefs => func   |
| onPlay         | Yes      | Catch when media is playing                                                                                                                                                                                                       | func                         |
| onPlause       | Yes      | Catch when media is paused                                                                                                                                                                                                        | func                         |
| onEnded        | Yes      | Catch when video is end                                                                                                                                                                                                           | func                         |
| onBuffering    | Yes      | Catch `onBuffering` status when playing                                                                                                                                                                                           | bool => func                 |
| onPlayerError  | Yes      | Catch `error` when playing. Reference: [Shaka.Player.ErrorEvent][]                                                                                                                                                                | {Shaka.extern.Error} => func |
| onStatsChanged | Yes      | Catch `stats` when playing video, including currentTime (current seek position), and currentEndTime (length of video duration if VOD) (in seconds) of media player element [`IStats`]. Reference: [IStats & Shaka.extern.Stats][] | {Shaka.extern.Stats} => func |

[shaka.extern.playerconfiguration]: https://shaka-player-demo.appspot.com/docs/api/shaka.extern.html#.PlayerConfiguration
[shaka.extern.uiconfiguration]: https://shaka-player-demo.appspot.com/docs/api/shaka.extern.html#.UIConfiguration
[playerrefs]: https://github.com/mkhuda/react-shaka-player/blob/c4459e31027a08165007d03c9a08ff8a3e5de3dc/src/types/index.ts#L3
[shaka.player.errorevent]: https://shaka-player-demo.appspot.com/docs/api/shaka.Player.html#.event:ErrorEvent
[istats & shaka.extern.stats]: https://shaka-player-demo.appspot.com/docs/api/shaka.extern.html#.Stats

<br>

---

## Documentation & Important Links

- [GitHub Repository](https://github.com/g-silva-oliveira/shaka-player-component.git)
- [Shaka Demo](https://shaka-player-demo.appspot.com)
- [Shaka API documentation](https://shaka-player-demo.appspot.com/docs/api/index.html)
- [Shaka Tutorials](https://shaka-player-demo.appspot.com/docs/api/tutorial-welcome.html)
- Problemas e Bugs [Issues](https://github.com/g-silva-oliveira/shaka-player-component.git/issues)

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

---

## License

[MIT](https://choosealicense.com/licenses/mit/)
