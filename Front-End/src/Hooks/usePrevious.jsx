import { useEffect, useRef, useState } from "react";

const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
};

export default usePrevious;


  // Custom hook to get the previous value of a state
