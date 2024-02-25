import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
dayjs.extend(utc);
import dotenv from "dotenv";
dotenv.config();
import { COOKIE_MAX_AGE } from "./constant.js";
import { StatusCodes } from "http-status-codes";
export const priorities = ["high", "moderate", "low"];
export const taskStatus = {
  "TO DO": "To do",
  "IN PROGRESS": "In Progress",
  BACKLOG: "Backlog",
  DONE: "Done",
};
export const formatDate = (date) => {
  return dayjs
    .utc(date, "MM-DD-YYYY")
    .endOf("day")
    .add("12", "hour")
    .add(1, "second")
    .toDate();
};
export const calculateDateRange = (range) => {
  let startDate;
  switch (range) {
    case "today":
      startDate = dayjs().subtract(1, "day").utc().toDate();
      break;
    case "week":
      startDate = dayjs().subtract(7, "day").utc().toDate();

      break;
    case "month":
      startDate = dayjs().subtract(30, "day").utc().toDate();
      break;
    default:
      startDate = dayjs().subtract(1, "day").utc().toDate();
  }
  return new Date(startDate);
};

export const generateAndSendToken = (res, user, message) => {
  const userObjWithoutPassword = user.removePassword();
  const token = user.createJwt();
  res.cookie("jwt", token, {
    secure: process.env.NODE_ENV !== "development",
    httpOnly: true,
    sameSite: "strict",
    expires: new Date(Date.now() + COOKIE_MAX_AGE),
  });
  res.status(StatusCodes.OK).json({ message, user: userObjWithoutPassword });
};
