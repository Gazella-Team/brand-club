import React from "react";
import YouTube from "react-youtube";

export default class YoutubeVideoEng extends React.Component {
  render() {
    const opts = {
      height: "400px",
      width: "300px",
      playerVars: {
        autoplay: 1,
      },
    };
    const optsSmaller = {
      height: "300px",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <>
        <div className="heroTwo:w-[80%] heroTwo:mx-auto overflow-hidden last:w-[100%]">
          <YouTube
            className="overflow-hidden w-[100%]"
            videoId="HTX-L4NaOAA"
            opts={opts}
            onReady={this._onReady}
          />
        </div>
      </>
    );
  }

  _onReady(event: any) {
    event.target.pauseVideo();
  }
}