import logo from "./logo.svg";
import "./App.css";
// import Tree from "react-d3-tree";
// import { RawNodeDatum } from "react-d3-tree/lib/types/common";
import React, { useState } from "react";
// import React from 'react';
import Tree from "react-d3-tree";
import "./custom-tree.css";
import { AddFamily } from "./components/Addfimily";
const orgChart = {
  name: "CEO",
  children: [
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
  ],
};

export default function OrgChartTree() {
  // const [tree, setTree] = useState<RawNodeDatum >({
  const [tree, setTree] = useState({
    name: "Root",
    children: [],
  });
  const [node, setNode] = useState(undefined);
  // const [isOpen, setIsOpen] = useState(false);
  // const close = () => setIsOpen(false);
  const close = () => setNode(undefined);

  const handleSubmit = (name) => {
    const newTree = bfs(node.data.name, tree, name);
    console.log(name, newTree);
    if (newTree) {
      setTree(newTree);
    }
  };

  return (
    <div id="treeWrapper" style={{ width: "50em", height: "20em" }}>
      <Tree
        data={tree}
        onNodeClick={(datum) => setNode(datum)}
        translate={{
          x: 200,
          y: 200,
        }}
      />
      <AddFamily
        isOpen={Boolean(node)}
        onClose={close}
        onSubmit={handleSubmit}
      />
    </div>
    // <div id="treeWrapper" style={{ width: "500em", height: "200em" }}>
    //   <Tree
    //     data={orgChart}
    //     rootNodeClassName="node__root"
    //     branchNodeClassName="node__branch"
    //     leafNodeClassName="node__leaf"
    //   />
    // </div>
  );
}
function bfs(name, tree, newNodeName) {
  const queue = [];
  queue.unshift(tree);
  // console.log(name, tree, newNodeName);
  // console.log(queue.length);
  while (queue.length > 0) {
    const curNode = queue.pop();
    // console.log(curNode.name);
    if (curNode.name === name) {
      curNode.children.push({
        name: newNodeName,
        children: [],
      });
      return { ...tree };
    }
    const len = curNode.children.length;
    // console.log("len",len)

    for (let i = 0; i < len; i++) {
      queue.unshift(curNode.children[i]);
    }
  }
}