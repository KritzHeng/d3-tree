import logo from "./logo.svg";
import "./App.css";
// import Tree from "react-d3-tree";
import { RawNodeDatum } from "react-d3-tree/lib/types/common";
import React, { useState } from "react";
// import React from 'react';
import Tree from "react-d3-tree";
import "./custom-tree.css";
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
  //   name: "Root",
  //   children: [],
  // })
  return (
    // <div id="treeWrapper" style={{ width: "50em", height: "20em" }}>
    //   <Tree data={orgChart} />
    // </div>
    <div id="treeWrapper" style={{ width: "500em", height: "200em" }}>
      <Tree
        data={orgChart}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
      />
    </div>
  );
}
