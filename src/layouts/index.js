import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import theme from './theme'
import mdxComponents from './mdxComponents'
import Header from "./header"
import Footer from "./footer"

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.parentBgColor};
  height: 100%;
  min-height: 100vh;
`;

const StyledLayoutBody = styled.div`
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
  margin: 0px auto;
  flex: 1;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.color};
`;

const Root = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledLayoutBody>
          <MDXProvider components={mdxComponents}>
            {children}
          </MDXProvider>
        </StyledLayoutBody>
        <Footer/>
      </StyledLayout>
    </ThemeProvider>
  )
}


export default Root