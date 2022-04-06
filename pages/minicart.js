import { state } from "./state";
import { subscribe } from "valtio";
import { watch } from "valtio/utils";
import React, { useState, useEffect } from "react";
import { useSnapshot } from "valtio";



const Minicart = () => {
  const { skus, qtytotal, boxsignupopened } = useSnapshot(state);

  if (typeof window !== "undefined") {
    return (
      <>
        {qtytotal}
      </>
    );
  } else {
    return <>{qtytotal}</>;
  }
};

export default Minicart;
