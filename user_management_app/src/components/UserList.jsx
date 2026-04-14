import UserCard from './UserCard';

function UserList({ users, onDeleteUser }) {
  if (users.length === 0) {
    return <p className="no-users">No users yet. Add one above!</p>;
  }

  return (
    <div className="user-list">
      <h2>User List</h2>
      <div className="users-container">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDelete={() => onDeleteUser(user.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default UserList;
