import React, { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSongsAction } from "./context/song/slice.ts";
function App({children}:{children:ReactNode}) {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchSongsAction({pagination:{skip:0,limit:10}}));
  },[])
  return (
      <>
        {children}
      </>
  );
}

export default App;
