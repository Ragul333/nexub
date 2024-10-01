import React from "react";
import { Link, useParams } from "react-router-dom";
import { Edit2, Star, StarIcon } from "lucide-react";
import TaskStatus from "./TaskStatus";
import { memberDetails } from "../utils/constants";

const ProfileDetails = () => {
  const { id } = useParams();
  const memberData = memberDetails[id]; 

  if (!memberData) {
    return <div>Member not found</div>;
  }

  return (
    <div className="p-4 md:p-8 lg:p-10">
      <div className="">
        <h1 className="text-sm md:text-md font-normal text-gray-400 mb-2">
          Project Frontend &gt; <Link to={"/"}>Project Members</Link> &gt; Employee Details{" "}
        </h1>
        <h1 className="text-xl md:text-3xl font-semibold mb-8 md:mb-16">Employee Details</h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Profile Picture and Details */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4 mb-4 md:mb-0 col-span-12">
            <img
              src={`${memberData.profile}`}
              alt={memberData.name}
              className="w-32 h-32 md:w-50 md:h-50 rounded-lg object-cover"
            />
            <div className="mt-4 md:mt-0">
              <h5 className="text-xl md:text-2xl mb-2 font-semibold">Welcome, {memberData.name}</h5>
              <p className="text-lg md:text-xl mb-2 text-gray-500">{memberData.role}</p>
              <p className="text-sm text-gray-500">Manage your info, privacy, and security to make Frontend work better for you.</p>
            </div>
          </div>

          {/* Ratings */}
          <div className="col-span-12 md:col-span-6 mt-6 md:mt-0 text-center border p-3 bg-white rounded-lg">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-medium mb-2 text-left">Ratings</h4>
              <Edit2 className="w-4 h-4" />
            </div>

            <div className="flex justify-center items-center space-x-1">
              <div className="mr-2">
                <img className="rounded-full w-14" src={memberData.reporting.profile} />
              </div>
              <div className="text-left">
                <h3 className="text-md font-semibold">{memberData.reporting.name}</h3>
                <h3 className="text-sm text-blue-500">{memberData.reporting.designation}</h3>
              </div>
            </div>

            <div className="flex justify-center space-x-2 md:space-x-6 mt-4">
              {[...Array(5)].map((element, index) => {
                if (index + 1 <= memberData.reporting.ratings) {
                  return <StarIcon key={index} color="yellow" fill="yellow" />;
                }
                return <Star key={index} color="yellow" />;
              })}
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          {/* Task Completion Summary */}
          <div className="col-span-12 md:col-span-6 mt-6 rounded-md bg-white border">
            <TaskStatus />
          </div>
        </div>
      </div>

      {/* Task Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        
        {/* Current Tasks */}
        <div className="bg-white shadow-md rounded-lg">
          <h3 className="font-semibold mb-4 p-2 rounded-t-lg bg-gray-300">Current Tasks</h3>
          {memberData.currentTasks.map((task, idx) => (
            <div className="p-3" key={idx}>
              <TaskCard task={task} status={"current"} />
            </div>
          ))}
        </div>

        {/* Completed Tasks */}
        <div className="bg-white shadow-md rounded-lg">
          <h3 className="font-semibold mb-4 p-2 rounded-t-lg bg-gray-300">Completed Tasks</h3>
          {memberData.completedTasks.map((task, idx) => (
            <div className="p-3" key={idx}>
              <TaskCard task={task} status={"completed"} />
            </div>
          ))}
        </div>

        {/* Failed Tasks */}
        <div className="bg-white shadow-md rounded-lg">
          <h3 className="font-semibold mb-4 p-2 rounded-t-lg bg-gray-300">Failed Tasks</h3>
          {memberData.failedTasks.map((task, idx) => (
            <div className="p-3" key={idx}>
              <TaskCard task={task} status={"failed"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Task Card Component
const TaskCard = ({ task, status }) => {
  let color = status === "completed" ? "green" : status === "failed" ? "red" : "gray";
  return (
    <div className={`bg-${color}-${color === 'red' ? "200" : "100"} p-3 rounded-md`}>
      <h4 className="font-medium">{task.title}</h4>
      <p className="text-sm text-gray-600">ID: {task.id}</p>
      <p className={`text-sm font-medium text-${task.priority === "High" ? "red" : "green"}-500`}>
        {task.priority}
      </p>
    </div>
  );
};

export default ProfileDetails;
