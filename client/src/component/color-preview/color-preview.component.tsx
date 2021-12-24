import React, { useEffect, useState } from "react";
import "./color-preview.component.css";

interface IProps {
  color: string;
}

export default function ColorPreview({ color }: IProps) {
  return (
    <div className="color-preview-container">
      <h4>Socket Response</h4>
      <div
        className="preview"
        style={{
          background: color,
        }}
      ></div>
    </div>
  );
}
