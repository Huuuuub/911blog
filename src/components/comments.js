import React, {useState, useEffect} from 'react'
import { Helmet } from "react-helmet"
import styled from 'styled-components';
const StyledComments = styled.div`
  margin-top: 128px;
`;
export default ({pageId}) => {
  const [loadScript, setLoadScript] = useState(false)
  useEffect(() => {
    setLoadScript(true)
  }, [])

return (
    <StyledComments>
      <div id="commento"/>
      {loadScript && (
        <Helmet>
          <script
            src="https://commento.thecodeisgreen.com/js/commento.js"
            data-auto-init="true"
            data-page-id={pageId}
          />
        </Helmet>
      )}
    </StyledComments>
  )
};