import React, { useState } from 'react';
import './Profile.css'; // Create this CSS file

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    address: ''
  });
  const [activePage, setActivePage] = useState('Profile');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Form submitted!');
  };

  return (
    <div className="prof-1">
      {/* Sidebar */}
      <div className="prof-2">
        <h3>Menu</h3>
        <ul className="prof-3">
          <li onClick={() => setActivePage('Profile')} className={activePage === 'Profile' ? 'active' : ''}>Profile</li>
          <li onClick={() => setActivePage('Registration')} className={activePage === 'Registration' ? 'active' : ''}>Registration</li>
          <li onClick={() => setActivePage('Login')} className={activePage === 'Login' ? 'active' : ''}>Login</li>
          <li onClick={() => setActivePage('Logout')} className={activePage === 'Logout' ? 'active' : ''}>Logout</li>
          <li onClick={() => setActivePage('My Orders')} className={activePage === 'My Orders' ? 'active' : ''}>My Orders</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="prof-4">
        {activePage === 'Profile' && (
          <div className="prof-5">
            <h2>Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="prof-6">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div  className="prof-6">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div  className="prof-6">
                <label>Bio:</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                />
              </div>
              <div  className="prof-6">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="prof-7">Submit</button>
            </form>
          </div>
        )}
        {activePage === 'Registration' && <h2>Registration Page</h2>}
        {activePage === 'Login' && <h2>Login Page</h2>}
        {activePage === 'Logout' && <h2>Logout Page</h2>}
        {activePage === 'My Orders' && <h2>My Orders Page</h2>}
      </div>
    </div>
  );
};

export default ProfilePage;
