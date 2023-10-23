import React, { useEffect, useState } from "react";
import Loading from "../components/loading";
import Card from "../components/card";
import useHTTP from "../config/useHTTP";
import {
  CREATE_ROOT_NODE,
  CREATE_SIGNLE_NODE,
  DELETE_NODE_BY_ID,
  GET_ALL_NODE,
} from "../config/api";
import Node from "../components/node";
import convertToTree from "../utils/convertTreeView";
import Modal from "../components/modal";
import NodeForm from "../components/nodeForm";
import PrimaryButton from "../components/buttons/primaryButton";
import CancelButton from "../components/buttons/cancelButton";

enum OperationType {
  ADD = "add",
  DELETE = "delete",
}

interface NodeData {
  _id: string;
  name: string;
  type: string;
}

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [operationType, setOperationType] = useState<OperationType | null>(
    null
  );
  const [nodes, setNodes] = useState<NodeData[]>([]);
  const [data, setData] = useState<any>({});
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [folderName, setFolderName] = useState<string>("");

  const { GetData, PostData, DeleteData } = useHTTP();

  useEffect(() => {
    getNodes();
  }, []);

  useEffect(() => {
    const root = nodes.find((e) => e.type === "root");
    const children = convertToTree(nodes, root?._id);
    setData({ ...root, children });
  }, [nodes]);

  const getNodes = async () => {
    setLoading(true);
    const res = await GetData({ api: GET_ALL_NODE });
    if (res?.data?.item) {
      setNodes(res.data.item);
    }
    setLoading(false);
  };

  const deleteNode = async () => {
    setLoading(true);
    const res = await DeleteData({
      api: `${DELETE_NODE_BY_ID}?id=${selectedNode?._id}`,
    });
    if (res?.data?.item?.length) {
      setNodes((prevState) =>
        prevState.filter((e) => !res.data.item.includes(e._id))
      );
      reset();
    }
    setLoading(false);
  };

  const addNode = async (type: "root" | "node") => {
    const body = {
      name: folderName,
      parentId: selectedNode?._id,
    };
    if (!folderName) {
      window.alert("Folder name required");
      return;
    }

    setLoading(true);
    const api = type === "root" ? CREATE_ROOT_NODE : CREATE_SIGNLE_NODE;
    const res = await PostData({
      api: `${api}`,
      body,
    });
    if (res?.data?.item) {
      setNodes((prevState) => [...prevState, res.data.item]);
      reset();
    } else {
      console.error("Response data or item is undefined");
    }
    setLoading(false);
  };

  const nodeOparetionHandler = (node: NodeData, type: OperationType) => {
    setSelectedNode(node);
    setShowModal(true);
    setOperationType(type);
  };

  const reset = () => {
    setShowModal(false);
    setSelectedNode(null);
    setFolderName("");
    setOperationType(null);
  };

  return (
    <div className="justify-center">
      <div>
        {loading && <Loading />}

        {nodes.length === 0 && (
          <div className="flex justify-center mt-4">
            <NodeForm
              label={`Create Root Folder`}
              onChange={(e) => setFolderName(e.target.value)}
              onAddClick={() => addNode("root")}
              onCancelClick={reset}
              value={folderName}
            />
          </div>
        )}

        {nodes.length > 0 && (
          <Card className="mx-auto mt-4">
            <Node
              node={data}
              className="mb-1"
              deleteHandler={(node: NodeData) =>
                nodeOparetionHandler(node, OperationType.DELETE)
              }
              addHandler={(node: NodeData) =>
                nodeOparetionHandler(node, OperationType.ADD)
              }
              i={1}
            />
          </Card>
        )}
      </div>

      <Modal showModal={showModal} onCloseClick={reset}>
        {operationType === OperationType.ADD && (
          <NodeForm
            label={`Add Folder in ${selectedNode?.name}`}
            onChange={(e) => setFolderName(e.target.value)}
            onAddClick={() => addNode("node")}
            onCancelClick={reset}
            value={folderName}
          />
        )}
        {operationType === OperationType.DELETE && (
          <Card>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Delete `{selectedNode?.name}`
            </label>
            <div className="mt-4">
              <PrimaryButton btnName="Cancel" onClick={reset} />
              <CancelButton btnName="Delete" onClick={deleteNode} />
            </div>
          </Card>
        )}
      </Modal>
    </div>
  );
}
