import React from 'react';
import ReactPlayer from "react-player";
import styled from "styled-components/macro"
// import video from "../../assets/video/lostonyou.mp4"
import {IoPlay} from "react-icons/io5"
import videoThumb from "../../assets/images/0f4bbac0aae9422ed4b6a8073d3de2712088c3a1.jpg"

const video = "https://www.youtube.com/watch?v=PcH-uLdJ-98"

export const PlayIcon = styled(({className, withText, size, centering}) => {
    return <div className={className}>
        <div className="play-button">
            <IoPlay color="red" size={size ? size : "35"} />
        </div>
        {withText &&  <p>{withText}</p>}
    </div>
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .play-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width:${props => props.width ? props.width : "60px"};
    height:${props => props.height ? props.height : "60px"};
    border-radius:50%;
    background:white;
  }
  svg {
    position: relative;
    left:${props => props.centering ? props.centering : "3px"}
  }
  p {
    color: white;
    font-weight: bold;
    font-size:1.5em;
    margin-top:.9rem;
  }
`

const VideoPlayer = styled(({className, videoUrl, thumb, playBtn}) => {
    return (
        <div className={`player-wrapper ${className}`}>
            <ReactPlayer className='react-player' playIcon={playBtn ? playBtn : <PlayIcon />} controls={true} playing={true} light={thumb ? thumb : videoThumb} width="100%" height="100%" url={videoUrl ? videoUrl : video} />
        </div>
    );
})`
  &.player-wrapper {
    position: relative;
    padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export default VideoPlayer;