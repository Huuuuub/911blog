import React from 'react'
import styled from 'styled-components'
import {TwitterTweetEmbed} from 'react-twitter-embed'
import InstagramEmbed from 'react-instagram-embed';
import YouTube from 'react-youtube'

const R = require('ramda')
const StyledVisuel = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  justify-content: center
`;

const Visuel = ({
  instagramId, 
  tweetId,
  youTubeId
}) => {
  return (
    <StyledVisuel >
      {!R.isNil(tweetId) && (
        <TwitterTweetEmbed tweetId={tweetId}/>
      )}
      {!R.isNil(instagramId) && (
        <InstagramEmbed
          url={`https://instagr.am/p/${instagramId}/`}
          hideCaption={true}
        />
      )}
      {!R.isNil(youTubeId) && (
        <YouTube videoId={youTubeId}/>
      )}
    </StyledVisuel>
  )
}

export default Visuel