
import React from 'react';

import ReactLogo from "..";

export default (props) => {

  const { show } = props;

  return (
    <div className={`preloader bg-soft flex-column justify-content-center align-items-center ${show ? "" : "show"}`}>
      <Image className="loader-element animate__animated animate__jackInTheBox" src={"/static/assets/img/technologies/react-logo-transparent.svg"} height={40} />
    </div>
  );
};
