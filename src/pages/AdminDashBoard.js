import React, { useEffect, useState } from "react";
import axios from "../service/axios";

const AdminDashBoard = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/admin/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`/admin/users/${id}`);
      setMessage(`User with ID ${id} deleted successfully.`);
      fetchUsers(); 
    } catch (err) {
      console.error("Error deleting user:", err);
      setMessage("Failed to delete user.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin - All Users</h2>
      {message && <p className="text-green-600 mb-4">{message}</p>}

      <table className="w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td className="p-2" colSpan="4">No users found.</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashBoard;
