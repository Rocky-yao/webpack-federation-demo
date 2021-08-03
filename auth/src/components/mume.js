import React, { useEffect, useRef } from 'react';
import { mount } from 'mume/MumeApp';
import { useHistory } from 'react-router-dom';

export default function MumeApp() {
  const ref = useRef();
  const history = useHistory();
  useEffect(() => {
    mount(ref.current,"mume==hahaha");
  }, []);

  return <div ref={ref}></div>;
}
