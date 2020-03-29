import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  align-items: center;
  font-size: 10px;
  background-color: #444;
  color: white;
  &>div {
    margin: 0px 16px;
  };

  &>div:fist-of-type {
    margin-left: 0px;
  };

  &>div:last-of-type {
    margin-right: 0px;
  };
`;

const Footer = ({ siteTitle }) => (
  <StyledFooter>
    <div>{"réalisé avec Gatsby"}</div>
  </StyledFooter>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
