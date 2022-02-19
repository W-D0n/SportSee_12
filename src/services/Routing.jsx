import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Dashboard';
import Error404 from '../pages/Error404';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      {/* <Route path="user/:id" element={<Dashboard />}> */}
      <Route path="user" element={<Dashboard />}>
        <Route path=":id" element={<Dashboard />} />
      </Route>
      <Route path="error" element={<Error404 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default Routing