"use client";
import { useEffect, useRef, useState } from "react";
import { Player} from "@lordicon/react";
import ICON from "./shopping.json";

export const CartIcon = () => {
  const playerRef = useRef(null);
  const [state, setState] = useState("morph-trash-full");


  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, [state]);

  const onClick = () => {
    if (state === "in-trash-empty") {
      setState("hover-trash-empty");
    } else if (state === "hover-trash-empty") {
      setState("morph-trash-full");
    } else if (state === "morph-trash-full") {
      setState("hover-trash-full");
    } else if (state === "hover-trash-full") {
      setState("morph-trash-full-to-empty");
    } else if (state === "morph-trash-full-to-empty") {
      setState("hover-trash-empty");
    }
  };
  const handleMouseEnter = () => {
    setState("hover-trash-empty");
  };

  const handleMouseLeave = () => {
    setState("hover-trash-full");
  };
  
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Player
        ref={playerRef}
        icon={ICON}
        state={state}
        size={26}
        colorize="white"
      />
    </div>
  );
};
