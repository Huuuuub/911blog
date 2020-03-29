import React, { useState, useEffect } from 'react';
import Moment from 'moment';

const R = require('ramda');

const useHumanizeLastUpdateDate = (value) => {
  const humanize = (value) => {
    const diff = Moment(value).diff(Moment());
    return Moment.duration(diff).humanize(true);
  };

  const [diff, setDiff] = useState(humanize(value));

  useEffect(() => {
    setDiff(humanize(value));
    const intervalId = setInterval(() => {
      setDiff(humanize(value));
    }, 10000);

    return (() => {
      clearInterval(intervalId);
    });
  }, [value]);

  return diff;
};

const DateFromNow = ({
  prefix,
  value
}) => (
  <div className="instagram-draft-last-update ">
    {`${prefix} ${useHumanizeLastUpdateDate(value)}`}
  </div>
)

DateFromNow.defaultProps = {
  prefix: ""
}

export default DateFromNow;