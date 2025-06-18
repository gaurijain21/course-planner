"use client";
import "./CourseFlow.css";

import React, { useCallback, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

export default function CourseFlow() {
  const [completed, setCompleted] = useState([]);

  const initialNodes = [
    {
      id: "cse20",
      position: { x: 0, y: 0 },
      data: { label: "CSE 20" },
      style: { padding: 10, background: "#f1f5f9" },
    },
    {
      id: "math19a",
      position: { x: 200, y: 0 },
      data: { label: "Math 19A" },
      style: { padding: 10, background: "#f1f5f9" },
    },
    {
      id: "cse30",
      position: { x: 100, y: 150 },
      data: { label: "CSE 30" },
      style: { padding: 10, background: "#f1f5f9" },
    },
    {
      id: "elective1",
      position: { x: 320, y: 200 },
      data: { label: "Choose an Elective" },
      style: { padding: 10, background: "#f1f5f9" },
    },
  ];

  const initialEdges = [
    { id: "e1", source: "cse20", target: "cse30", animated: true },
    { id: "e2", source: "math19a", target: "cse30", animated: true },
    { id: "e3", source: "cse30", target: "elective1", animated: true },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const prereqs = {
    cse30: ["cse20", "math19a"],
    elective1: ["cse30"],
  };

  const hasAllPrereqs = (courseId, completedList) => {
    const reqs = prereqs[courseId] || [];
    return reqs.every((reqId) => completedList.includes(reqId));
  };

  const handleNodeClick = useCallback(
    (event, node) => {
      const clickedId = node.id;

      const updatedCompleted = completed.includes(clickedId)
        ? completed.filter((id) => id !== clickedId)
        : [...completed, clickedId];

      setCompleted(updatedCompleted);

      setNodes((nds) =>
        nds.map((n) => {
          const isCompleted = updatedCompleted.includes(n.id);
          const isUnlocked = hasAllPrereqs(n.id, updatedCompleted);

          return {
            ...n,
            data: { ...n.data },
            style: {
              ...n.style,
              background: isCompleted
                ? "#86efac" // green
                : isUnlocked
                ? "#d8b4fe" // purple
                : "#f1f5f9", // gray
            },
          };
        })
      );
    },
    [completed, setNodes]
  );

  return (
    <div style={{ width: "100%", height: 500 }} className="bg-white rounded shadow">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={handleNodeClick}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
