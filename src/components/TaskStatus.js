import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TaskStatus = () => {
    const completed = 55;
    const incomplete = 30;
    const overdue = 15;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-full rounded-lg bg-white">
            {/* Circular Progress Bar */}
            <div className="flex items-center justify-center">
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                    <div className="absolute">
                        <CircularProgressbar
                            value={completed}
                            styles={buildStyles({
                                pathColor: "#4F9DF9",
                                trailColor: "white",
                            })}
                        />
                    </div>
                    <div className="absolute h-20 w-20 m-6">
                        <CircularProgressbar
                            value={incomplete}
                            styles={buildStyles({
                                pathColor: "#F97316",
                                trailColor: "white",
                            })}
                        />
                    </div>
                    <div className="h-15 w-15 m-10">
                        <CircularProgressbar
                            value={overdue}
                            styles={buildStyles({
                                pathColor: "#EF4444",
                                trailColor: "white",
                            })}
                        />
                    </div>
                </div>
            </div>

            {/* Task Status */}
            <div className="p-4 bg-yellow-50 text-left rounded-md flex flex-col justify-center">
                <h3 className="text-lg font-normal text-center md:text-left">All tasks by completion status</h3>
                <div className="flex flex-col h-24 mt-4 justify-between">
                    <p className="text-blue-500 font-normal">{completed}% <span className="text-black">Completed Tasks</span></p>
                    <p className="text-orange-500 font-normal">{incomplete}% <span className="text-black">Incomplete Tasks</span></p>
                    <p className="text-red-500 font-normal">{overdue}% <span className="text-black">Overdue</span></p>
                </div>
            </div>
        </div>
    );
};

export default TaskStatus;
