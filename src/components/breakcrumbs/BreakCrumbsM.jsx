import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";

const BreakCrumbsM = ({ link1, link2, link3 }) => {

  const [location, setLocation]= useState();

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }


  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        color="inherit"
        href={`/${link1}`}
        onClick={handleClick}>
        {link1}
      </Link>
      <Link
        color="inherit"
        href={link2}
        onClick={handleClick}>
        {link2}
      </Link>
      <Link
        color="textPrimary"
        href={link3}
        aria-current="page"
        onClick={handleClick}
      >
        {link3}
      </Link>
    </Breadcrumbs>
  );
};

export default BreakCrumbsM;
