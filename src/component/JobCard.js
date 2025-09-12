import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
      <p className="text-gray-600 mt-2">{job.description}</p>
      <p className="text-gray-700 mt-2">
        <span className="font-medium">Location:</span> {job.location}
      </p>
      <p className="text-gray-700">
        <span className="font-medium">Salary:</span> ₹{job.salary}
      </p>
    </div>
  );
};

export default JobCard;
