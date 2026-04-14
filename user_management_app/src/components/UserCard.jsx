function UserCard({ user, onDelete }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
      <p>State: {user.state}</p>
      <button onClick={onDelete} className="delete-btn">Delete</button>
    </div>
  );
}

export default UserCard;
