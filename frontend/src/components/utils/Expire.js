import React, { useEffect, useState } from 'react';

const Expire = (props) => {
  const [visible, setVisible] = useState(true);
  const [startFading, setStartFading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartFading(true);
    }, props.delay - 1000);
  }, [props.delay]);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, props.delay);
  }, [props.delay]);

  return visible ? (
    <div className={startFading && 'animate-fadeOut'}>{props.children}</div>
  ) : (
    <></>
  );
};

export default Expire;
