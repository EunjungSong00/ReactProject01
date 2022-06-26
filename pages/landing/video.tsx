import React, {memo, useEffect, useRef, useState} from 'react';
import styled from '@emotion/styled';
//
//
// interface IProps {
//   className?: string;
//   src: string;
// }

const Video = () => {
  const [nowPlaying, setNowPlaying] = useState(false); // 동영상 재생중 여부
  const [currentTime, setCurrentTime] = useState(0);  // 현재 동영상 재생 시간
  const [showControl, setShowControl] = useState(false);  // 컨트롤바가 visible 한지 값
  const [autoPlay, setAutoPlay] = useState();

  const ref = useRef<HTMLVideoElement>(null);
  const totalTime = (ref && ref.current && ref.current.duration) || 0; // 동영상 총 길이
  const videoElement = ref && ref.current;

  // 동영상 시간 업데이트 함수
  const addTimeUpdate = () => {
    const observedVideoElement = ref && ref.current;
    if (observedVideoElement) {
      observedVideoElement.addEventListener("timeupdate", function() {
        setCurrentTime(observedVideoElement.currentTime);
      });
      // 컴포넌트가 처음 마운트 될 때 동영상 시작 할지 말지 여부 (여기서는 시작되게 했음)
      setNowPlaying(true);
      observedVideoElement.play();
    }
  };

  useEffect(() => {
    addTimeUpdate();
  }, []);

  return(
    <div>
      <VideoBox
        autoPlay
        loop
        muted={true}
        ref={ref}
        playsInline={true}
        controls={false}
        style={{top: 0, margin: 0, padding: 0}}
      >
        <source src={'/images/landing/video/AdobeStock_262975375.mov'} type="video/mp4" />
      </VideoBox>
    </div>
  )
}

export default memo(Video)

const VideoBox = styled.video`
  z-index: 0;
  width: 133%;
  object-fit: cover;
  object-position: -533px 0;

  @media only screen and (max-width: 1700px) {
    width: 140%;
    height: 100%;
    object-position: -533px 0;
  }

  @media only screen and (max-width: 1600px) {
    width: 150%;
  }
  
  @media only screen and (max-width: 1500px) {
    width: 162%;
  }
  
  @media only screen and (max-width: 1400px) {
    width: 174%;
  }

  @media only screen and (max-width: 1300px) {
    width: 188%;
  }

  @media only screen and (max-width: 1200px) {
    width: 206%;
  }

  @media only screen and (max-width: 1100px) {
    width: 226%;
  }

  @media only screen and (max-width: 1000px) {
    width: 251%;
  }

  @media only screen and (max-width: 900px) {
    width: 282%;
  }
  
  @media only screen and (max-width: 800px) {
    width: 323%;
  }
  
  @media only screen and (max-width: 700px) {
    width: 376%;
  }
  
  @media only screen and (max-width: 600px) {
    width: 513%;
  }
  
  @media only screen and (max-width: 500px) {
    width: 550%;
  }
  
  @media only screen and (max-width: 460px) {
    width: 393%;
    height: 100%;
    object-position: -533px 0;
  }

  @media only screen and (max-width: 280px) {
    width: 414%;
    object-position: -533px 0;
  }
`;
