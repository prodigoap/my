import { state } from './state'
import { subscribe } from 'valtio'
import { watch } from 'valtio/utils'
import React, { useState, useEffect } from 'react';
import { useSnapshot } from 'valtio';
const Minicart = () => {

  const { demo, demo2 } = useSnapshot(state);


  if (typeof window !== 'undefined') {
    return (
      <><div>Minicart {demo} {localStorage.getItem("prova")} </div>
      </>
    )
 
} else {
    return (
      <><div>Minicart {demo}  </div>
      </>
    )
}
      
      
      
}

export default Minicart