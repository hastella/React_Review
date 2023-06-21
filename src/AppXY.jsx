import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  // 처럼 연관있는 데이터들 (업데이트가 동시에 일어나는)을 한번에 묶어서 선언해줄 수 있다.
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div
      className="container"
      onPointerMove={(e) => {
        // setPosition({ x: e.clientX, y: e.clientY });
        // 만약 수평으로만 이동이 가능하다면?
        setPosition((prev) => ({ ...prev, x: e.clientX }));
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
}
