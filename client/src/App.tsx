import React, { useEffect, useState } from "react";
import "./App.css";
import ColorPreview from "./component/color-preview/color-preview.component";
import { socket } from "./services/socket";

function App() {
  const [color, setColor] = useState<string>("");

  const eventHandler = (color: string) => {
    setColor(color);
  };

  useEffect(() => {
    socket.on("SELECT_COLOR", eventHandler);
    // unsubscribe from event for preventing memory leaks
    return () => {
      socket.off("SELECT_COLOR", eventHandler);
    };
  }, []);

  return <ColorPreview color={color} />;
}

export default App;
