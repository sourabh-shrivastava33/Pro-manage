import React, { useState } from "react";
import { VscCollapseAll } from "react-icons/vsc";
import { IoAdd } from "react-icons/io5";
import TaskCard from "./TaskCard";
import { SwinLaneWrapper } from "../assets/styled-components/SwinLaneWrapper";
import Modal from "./Modal";
import CreateEditTask from "./CreateEditTask";

const SwimLane = ({ title, data }) => {
  const [expandedChecklistsId, setExpandedChecklistsId] = useState([]);
  const toggleCollapseMode = (id) => {
    setExpandedChecklistsId((prev) => {
      if (prev.includes(id)) {
        return prev.filter((taskId) => taskId !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  const collapseAll = () => {
    setExpandedChecklistsId([]);
  };

  return (
    <SwinLaneWrapper>
      <div className="swinlane-head">
        <h3>{title}</h3>
        <span className="icons">
          {title === "To do" && (
            <Modal>
              <Modal.Open name="create-task">
                <IoAdd className="add" />
              </Modal.Open>
              <Modal.Window windowName="create-task">
                <CreateEditTask />
              </Modal.Window>
            </Modal>
          )}
          <VscCollapseAll className="collapse-all" onClick={collapseAll} />
        </span>
      </div>
      <div className="task-card">
        {data?.map((ele) => (
          <TaskCard
            ele={ele}
            key={ele.id}
            title={title}
            toggleCollapseMode={toggleCollapseMode}
            expandedChecklistsId={expandedChecklistsId}
            setExpandedChecklistsId={setExpandedChecklistsId}
          />
        ))}
      </div>
    </SwinLaneWrapper>
  );
};

export default SwimLane;
