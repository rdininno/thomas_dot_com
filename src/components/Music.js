export default function Music() {
  const iframeStyle = {
    border: "0",
    width: "350px",
    height: "470px",
    "margin-bottom": "10px",
  };

  return (
    <div class="music-page">
      <div class="music-content">
        <iframe
          style={iframeStyle}
          src="https://bandcamp.com/EmbeddedPlayer/album=3614187337/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
          title="Mondo Tempo by Freak Heat Waves"
        >
          <a href="https://freakheatwaves.bandcamp.com/album/mondo-tempo">
            Mondo Tempo by Freak Heat Waves
          </a>
        </iframe>
        <iframe
          style={iframeStyle}
          src="https://bandcamp.com/EmbeddedPlayer/album=3746144664/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
          title="Zap The Planet by Freak Heat Waves"
        >
          <a href="https://freakheatwaves.bandcamp.com/album/zap-the-planet">
            Zap The Planet by Freak Heat Waves
          </a>
        </iframe>
        <iframe
          style={iframeStyle}
          src="https://bandcamp.com/EmbeddedPlayer/album=3753146578/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
          title="Beyond XXXL by Freak Heat Waves"
        >
          <a href="https://freakheatwaves.bandcamp.com/album/beyond-xxxl">
            Beyond XXXL by Freak Heat Waves
          </a>
        </iframe>
        <iframe
          style={iframeStyle}
          src="https://bandcamp.com/EmbeddedPlayer/album=2094044211/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
          title="Bonnies State of Mind by Freak Heat Waves"
        >
          <a href="https://freakheatwaves.bandcamp.com/album/bonnies-state-of-mind">
            Bonnie&#39;s State of Mind by Freak Heat Waves
          </a>
        </iframe>
      </div>
    </div>
  );
}
