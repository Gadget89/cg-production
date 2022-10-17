import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/design">Design</Link>
    </li>
    <li>
      <Link to="/develop">develop</Link>
    </li>
    <li>
      <Link to="/page-2">page-2</Link>
    </li>
  </div>
  );
}
export default navbar;