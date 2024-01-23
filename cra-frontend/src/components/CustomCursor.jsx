import "./DotRing.css";
import useMousePosition from "../hooks/useMousePosition";
import { Icon } from "@chakra-ui/react";
import { FaMicroblog } from "react-icons/fa";

const DotRing = () => {
    // 1.
  const { x, y } = useMousePosition();
  return (
    <>
            {/* 2. */}
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className="ring"
      >
        <Icon as={FaMicroblog} />
      </div>
            {/* 3. */}
      <div
        className="dot"
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;
