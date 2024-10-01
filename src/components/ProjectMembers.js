import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectMembers = ({ members }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const totalPages = Math.ceil(members.length / itemsPerPage);

  const indexOfLastMember = currentPage * itemsPerPage;
  const indexOfFirstMember = indexOfLastMember - itemsPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Project Members</h2>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentMembers.map((member) => (
          <div key={member.id} className={`p-4 bg-${member.status === "online" ? 'white' : 'yellow-100'} rounded-lg shadow-lg`}>
            <img
              src={member.img}
              alt={member.name}
              className="w-16 h-16 rounded-full mx-auto"
            />
            <h3 className="mt-4 text-center text-lg font-bold">{member.name}</h3>
            <p className="text-center text-gray-500">{member.role}</p>
            <Link to={`/profile/${member.id}`} className='py-1 px-4 border border-blue-500 mt-2 text-center block mx-auto bg-white'>
              <button className="text-gray-500 rounded-full">
                Visit Profile
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-end items-center mt-6 space-y-4 space-x-4 sm:space-y-0">
        <div className="flex items-center">
          <label htmlFor="itemsPerPage" className="mr-2">Items per page:</label>
          <select 
            id="itemsPerPage" 
            className="border p-1" 
            value={itemsPerPage} 
            onChange={handleItemsPerPageChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <span>{`${indexOfFirstMember + 1} – ${indexOfLastMember > members.length ? members.length : indexOfLastMember} of ${members.length}`}</span>
          <button
            className="ml-4 px-2 py-1 border rounded-md bg-white"
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          <button
            className="ml-2 px-2 py-1 border rounded-md bg-white"
            onClick={() => handlePageChange("next")}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectMembers;
