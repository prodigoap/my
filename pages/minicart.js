import { state } from "./state";
import { subscribe } from "valtio";
import { watch } from "valtio/utils";
import React, { useState, useEffect } from "react";
import { useSnapshot } from "valtio";
const Minicart = () => {
  const { demo, demo2 } = useSnapshot(state);

  if (typeof window !== "undefined") {
    return (
      <>{demo} {localStorage.getItem("prova")}{" "}</>
    );
  } else {
    return (
      <>{demo}</>
    );
  }
};

export default Minicart;
