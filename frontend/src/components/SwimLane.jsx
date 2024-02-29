import React, { useState } from "react";
import { VscCollapseAll } from "react-icons/vsc";
import { IoAdd } from "react-icons/io5";
import TaskCard from "./TaskCard";
import { SwinLaneWrapper } from "../assets/styled-components/SwinLaneWrapper";
import Modal from "./Modal";
import CreateEditTask from "./CreateEditTask";

const SwimLane = ({ title, data }) => {
  const [expandedChecklistsId, setExpandedChecklistsId] = useState(() =>
    localStorage.getItem(`expandedChecklistId:${title}`)
      ? JSON.parse(localStorage.getItem(`expandedChecklistId:${title}`))
      : []
  );
  const toggleCollapseMode = (id) => {
    setExpandedChecklistsId((prev) => {
      if (prev.includes(id)) {
        localStorage.setItem(
          `expandedChecklistId:${title}`,
          JSON.stringify(prev.filter((taskId) => taskId !== id))
        );
        return prev.filter((taskId) => taskId !== id);
      } else {
        localStorage.setItem(
          `expandedChecklistId:${title}`,
          JSON.stringify([...prev, id])
        );
        return [...prev, id];
      }
    });
  };
  const collapseAll = () => {
    localStorage.removeItem(`expandedChecklistId:${title}`);
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
