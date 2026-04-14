import { useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    const newUser = {
      ...user,
      id: crypto.randomUUID()
    };
    setUsers([...users, newUser]);
    console.log("users: ", users)
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
    console.log("deleted user: ", users.find(user => user.id === id))
  };

  return (
    <div className="app">
      <h1>User Management App</h1>
      <UserForm onAddUser={addUser} />
      <UserList users={users} onDeleteUser={deleteUser} />
    </div>
  )
}

export default App
