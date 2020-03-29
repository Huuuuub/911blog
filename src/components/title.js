import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import DateFromNow from './dateFromNow'

const StyledTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  font-size: 11px;
  padding: 0px 32px 16px 32px;
  //border-bottom: 1px solid #eee;
  background-color: white;
  &>h2 {
    margin: 0px;
    margin-right: 16px;
  }
  &>div {
    padding-bottom: 1px;
  }
`;

const Title = ({
  title,
  date
}) => (
  <StyledTitle>
    <h2>{title}</h2>
    <DateFromNow 
      prefix="publié "
      value={date}
    />
  </StyledTitle>
);

export default Title