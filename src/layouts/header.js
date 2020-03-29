import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin: 0px auto;
  height: 100px;
  align-items: center;
  padding: 8px 16px 8px 116px;
  &>a {
    color: ${props => props.theme.color};
    font-size: 32px;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
      <Link to="/">
        {siteTitle}
      </Link>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
