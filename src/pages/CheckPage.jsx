import { useEffect, useRef, useState } from "react";

const exampleData = {
  label: "전체선택",
  value: "",
  children: [
    {
      label: "충남",
      value: "1",
      children: [
        {
          label: "논산",
          value: "1-1",
          children: [
            {
              label: "은진",
              value: "1-1-1",
              children: [],
            },
            {
              label: "연산",
              value: "1-1-2",
              children: [],
            },
            {
              label: "연무",
              value: "1-1-3",
              children: [],
            },
          ],
        },
        {
          label: "부여",
          value: "1-2",
          children: [
            {
              label: "사비",
              value: "1-2-1",
              children: [],
            },
            {
              label: "임천",
              value: "1-2-2",
              children: [],
            },
          ],
        },
        {
          label: "계룡",
          value: "1-3",
          children: [
            {
              label: "두마",
              value: "1-3-1",
              children: [],
            },
            {
              label: "엄사",
              value: "1-3-2",
              children: [],
            },
            {
              label: "신도안",
              value: "1-3-3",
              children: [],
            },
          ],
        },
        {
          label: "금산",
          value: "1-4",
          children: [],
        },
      ],
    },
    {
      label: "충북",
      value: "2",
      children: [
        {
          label: "충주",
          value: "2-1",
          children: [],
        },
        {
          label: "청주",
          value: "2-2",
          children: [],
        },
        {
          label: "보은",
          value: "2-3",
          children: [],
        },
      ],
    },
  ],
};

const conventNodeList = (tree) => {
  const nodeList = [];
  const addNode = (node, parentIdx = null) => {
    nodeList.push({
      label: node.label,
      value: node.value,
      checked: false,
      indeterminate: false,
      parentIdx: parentIdx,
      childrenIdxs: [],
    });
    const nodeIdx = nodeList.length - 1;
    if (parentIdx !== null) nodeList[parentIdx].childrenIdxs.push(nodeIdx);
    if (node.children && node.children.length > 0) node.children.forEach((child) => addNode(child, nodeIdx));
  };

  addNode(tree);
  return nodeList;
};

const Checkbox = ({ onChange, checked, label, indeterminate = false }) => {
  const cRef = useRef();
  useEffect(() => {
    cRef.current.indeterminate = indeterminate;
  }, [cRef, indeterminate]);

  return (
    <>
      <input type="checkbox" onChange={onChange} checked={checked} ref={cRef} />
      {label}
    </>
  );
};

const CheckPage = () => {
  const [nodes, setNodes] = useState(conventNodeList(exampleData));

  const toggleNode = (nodeIdx) => {
    const _nodes = [...nodes];

    const updateParent = (nodeIdx) => {
      const _parentIdx = _nodes[nodeIdx].parentIdx;
      if (_parentIdx == null) return;
      const checkedCnt = _nodes[_parentIdx].childrenIdxs.filter((childrenIdx) => _nodes[childrenIdx].checked).length;
      const indeterminateCnt = _nodes[_parentIdx].childrenIdxs.filter((childrenIdx) => _nodes[childrenIdx].checked || _nodes[childrenIdx].indeterminate).length;
      _nodes[_parentIdx].checked = checkedCnt === _nodes[_parentIdx].childrenIdxs.length;
      _nodes[_parentIdx].indeterminate = 0 < indeterminateCnt && checkedCnt < _nodes[_parentIdx].childrenIdxs.length;
      updateParent(_parentIdx);
    };
    const updateChildren = (nodeIdx) => {
      _nodes[nodeIdx].childrenIdxs.forEach((childrenIdx) => {
        _nodes[childrenIdx].checked = _nodes[nodeIdx].checked;
        _nodes[childrenIdx].indeterminate = false;
        updateChildren(childrenIdx);
      });
    };

    _nodes[nodeIdx].checked = !nodes[nodeIdx].checked;
    _nodes[nodeIdx].indeterminate = false;
    updateChildren(nodeIdx);
    updateParent(nodeIdx);
    setNodes(_nodes);
    console.log(nodes);
  };

  const drawNode = (nodeIdx = 0) => {
    const node = nodes[nodeIdx];
    return node.childrenIdxs.length > 0 ? (
      <details key={nodeIdx}>
        <summary>
          <Checkbox onChange={() => toggleNode(nodeIdx)} checked={node.checked} label={node.label} indeterminate={node.indeterminate} />
        </summary>
        <div style={{ marginLeft: "40px" }}>{node.childrenIdxs.map((childrenIdx) => drawNode(childrenIdx))}</div>
      </details>
    ) : (
      <div key={nodeIdx}>
        <Checkbox onChange={() => toggleNode(nodeIdx)} checked={node.checked} label={node.label} />
      </div>
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      {drawNode()}
      <div style={{ marginTop: "20px" }}>
        선택한 항목 :{" "}
        {nodes
          .filter((node) => node.checked)
          .map((node) => (
            <>{node.label}, </>
          ))}
      </div>
    </div>
  );
};

export default CheckPage;
