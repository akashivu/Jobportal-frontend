import { useState } from "react"

const AdminDashBoard=()=>{
    const [users,setUsers]=useState([]);
    
 useEffect(()=>{
      fetchUsers();
},[]);


 const fetchUsers=async()=>{
    try{
        const res=await axios.get("/admin/users");
        setUsers(res.data);
    }
    catch(err){
         console.error("Error fetching users:", err);
    }
 };
 return(
     <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin - All Users</h2>
      <table className="w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td className="p-2" colSpan="3">No users found.</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
 );
};
export default AdminDashBoard;