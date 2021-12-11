import { useState, useEffect, useRef } from "react";

export const useCloseModel = (openSocialShare, setOpenSocialShare) => {
  const domNode = useRef();

  useEffect(() => {
    const closeModel = (e) => {
      if (!shareModel.current.contains(e.target)) {
        setOpenSocialShare(false);
      }
    };
    if (openSocialShare) {
      document.addEventListener("click", closeModel);
    }
    return () => {
      document.removeEventListener("click", closeModel);
    };
  });

  return [domNode, closeModel];
};
