let convertToTree = (nodes: any = [], parentId = "") => {
  let result: any = [];
  let childNodes = nodes.filter((node: any) => node?.parentId === parentId);
  if (childNodes.length) {
    childNodes.forEach((child: any) => {
      let childs = convertToTree(nodes, child._id);
      child.children = childs;
      result.push(child);
    });
  }

  return result;
};


export default convertToTree
