import React from "react";
import SwimLane from "./SwimLane";
import { swimlanes } from "../utils/lanesAndStatus";
import { KanbanBoardWrapper } from "../assets/styled-components/KanbanBoardWrapper";
import Menus from "./Menu";
import { useGetAllTaskQuery } from "../slices/taskApiSlice";
import Loader from "./Loader";
const KanbanBoard = ({ filterBy }) => {
  const queryParams = { filter: filterBy };
  const {
    data: tasks,
    isLoading,
    isFetching,
  } = useGetAllTaskQuery(queryParams);
  let data = tasks?.manipulatedTaskObj;
  console.log(isFetching);
  return (
    <Menus>
      <KanbanBoardWrapper>
        <div className="kanban-container">
          {isLoading || isFetching ? (
            <Loader />
          ) : (
            swimlanes.map((lane) => (
              <SwimLane
                title={lane.title}
                data={data[lane.title]}
                key={lane.title}
              />
            ))
          )}
        </div>
      </KanbanBoardWrapper>
    </Menus>
  );
};

export default KanbanBoard;
