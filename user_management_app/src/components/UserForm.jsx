import { useState } from 'react';

function UserForm({ onAddUser }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    state: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      setError('Name cannot be empty');
      return;
    }
    
    if (!formData.age || formData.age <= 0) {
      setError('Age must be a positive number');
      return;
    }
    
    if (!formData.state.trim()) {
      setError('State cannot be empty');
      return;
    }

    setError('');
    onAddUser({ name: formData.name, age: Number(formData.age), state: formData.state });
    
    setFormData({ name: '', age: '', state: '' });
  };

  return (
    <div className="user-form">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
          />
        </div>

        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter state"
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default UserForm;
