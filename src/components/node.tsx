import React, { FC, useState } from "react";
import CloseButton from "./buttons/closeButton";
import AddButton from "./buttons/addButton";
import CollapseButton from "./buttons/collapseButton";

const Node: FC<any> = ({
  node,
  className = "",
  deleteHandler = () => {},
  addHandler = () => {},
  i = 0,
}) => {
  let [collapse, setCollapse] = useState<boolean>(true);

  let paddingLeft = node?.children?.length>0? i * 20 : i*20 + 40;
  return (
    <>
      <div
        style={{ paddingLeft: `${paddingLeft}px` }}
        className={`flex justify-between items-center hover:bg-gray-200 px-4 rounded-md cursor-pointer ${className} `}
      >

        {/* Node Name */}
        <span className="flex items-center">
          {node?.children?.length > 0 && (
            <CollapseButton
              onClick={() => setCollapse((prevState) => !prevState)}
              collapse={collapse}
            />
          )}
          {node.name}
        </span>

        {/* Add and Delete Node Button */}
        <span className="flex">
          {node.type !== "root" && (
            <CloseButton onClick={() => deleteHandler(node)} className="mr-4" />
          )}
          <AddButton onClick={() => addHandler(node)} />
        </span>
      </div>

      {/* Children */}
      {node?.children?.length > 0 &&
        !collapse &&
        node.children.map((child: any, index: number) => (
          <Node
            key={index}
            deleteHandler={deleteHandler}
            addHandler={addHandler}
            node={child}
            i={i + 1}
          />
        ))}
    </>
  );
};

export default Node;
