import React, { useEffect, useState } from "react";
import { DashboardWrapper } from "../assets/styled-components/DashboardWrapper";
import KanbanBoard from "../components/KanbanBoard";
import { formatedDate } from "../utils/calculate";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
const DashboardPage = () => {
  const { search, pathname } = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filterValue = queryParams.get("filter");
  const navigate = useNavigate();
  const [filterBy, setFilterBy] = useState(() =>
    filterValue ? filterValue : "week"
  );
  const onChange = (e) => {
    setFilterBy(e.target.value);
    const searchParams = new URLSearchParams(search);
    searchParams.set("filter", e.target.value);
    navigate(`${pathname}?${searchParams}`);
  };
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (!filterValue) setFilterBy("week");
  }, [filterValue]);
  return (
    <DashboardWrapper>
      <div className="dashboard-header">
        <h3 className="greet-user">
          <span>Welcome!</span> <span>{`${user.name}`}</span>
        </h3>
        <span>{formatedDate(Date.now(), "D MMM,YYYY")}</span>
      </div>
      <div className="title-filter-container">
        <h2 className="title">Board</h2>
        <select
          name="filter"
          id="filter"
          value={filterBy}
          className="select-filter"
          onChange={onChange}
        >
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>
      </div>

      <KanbanBoard filterBy={filterBy} />
    </DashboardWrapper>
  );
};

export default DashboardPage;
