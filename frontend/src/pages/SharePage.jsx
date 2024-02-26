import React from "react";
import { useParams } from "react-router-dom";
import { useGetTaskQuery } from "../slices/taskApiSlice";
import Logo from "../components/Logo";
import { Tooltip } from "react-tooltip";
import Loader from "../components/Loader";
import PriorityTag from "../components/PriorityTag";
import { completedTask } from "../utils/calculate";
import ChecklistTaskBox from "../components/ChecklistTaskBox";
import DateTag from "../components/DateTag";
import { SharePageWrapper } from "../assets/styled-components/SharePageWrapper";
import toast from "react-hot-toast";
const SharePage = () => {
  const { taskId } = useParams();
  const { data, error, isLoading } = useGetTaskQuery(taskId);
  if (error)
    return (
      <h1>
        {error.data.message}
        {error.status}
      </h1>
    );
  if (isLoading)
    return (
      <SharePageWrapper>
        <Loader />
      </SharePageWrapper>
    );
  return (
    <SharePageWrapper>
      <div className="header">
        <Logo sharepage />
      </div>
      <div className="task-container">
        <PriorityTag priority={data.task.priority} />
        <p
          data-tooltip-id="title"
          data-tooltip-content={data.task.title}
          className="title"
          data-tooltip-variant="dark"
        >
          {data.task.title}
        </p>
        <Tooltip id="title" place="left" />
        <p className="checklist-detail">
          <span>Checklist</span> <span>(</span>
          <span>{completedTask(data.task.checklist)}</span>
          <span>/</span>
          <span>{data.task.checklist.length}</span>
          <span>)</span>
        </p>
        <div className="checklist-container">
          <div className="task-boxes">
            {data.task.checklist.map((checklist) => (
              <ChecklistTaskBox
                checklist={checklist}
                key={checklist._id}
                // disabled={true}
                changeCheckList={() => toast.error("Public Page,read only")}
              />
            ))}
          </div>
        </div>
        {data.task["due date"] && (
          <p className="due-date-container">
            <span className="text">Due Date</span>
            <DateTag
              date={data.task["due date"]}
              status={data.task.status}
              share
            />
          </p>
        )}
      </div>
    </SharePageWrapper>
  );
};

export default SharePage;
