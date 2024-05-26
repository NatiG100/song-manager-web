import React, { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSongsAction } from "./context/song/slice.ts";
import { fetchStatAction } from "./context/stat/slice.ts";
function App({children}:{children:ReactNode}) {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchSongsAction());
    dispatch(fetchStatAction());
  },[])
  return (
      <>
        {children}
      </>
  );
}

export default App;
