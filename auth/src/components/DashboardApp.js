import React, { useEffect, useRef } from 'react';
import { mount } from 'dashboard/DashboardApp';
import { useHistory } from 'react-router-dom';

export default function DashboardApp() {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    mount(ref.current,"dashboard===hahaha");
  }, []);

  return <div ref={ref}></div>;
}
