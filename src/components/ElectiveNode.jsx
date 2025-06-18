"use client";

import React from "react";
import "./ElectiveNode.css";

export default function ElectiveNode({ data }) {
  return (
    <div className="elective-node">
      {data.label}
    </div>
  );
}
