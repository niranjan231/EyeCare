import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Profile.css'; // Import the external CSS file

// Form validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  contact: yup
    .string()
    .min(10, 'Contact must be at least 10 characters')
    .required('Contact number is required'),
  bio: yup.string().max(500, 'Bio can be at most 500 characters'),
  address: yup.string().required('Address is required'),
  image: yup.mixed().required('An image is required'),
});

const Profile = () => {
  const [activeSection, setActiveSection] = useState('Profile');
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission (e.g., send the data to a server)
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      {/* Sidebar Section */}
      <div className="sidebar">
        <h3>Menu</h3>
        <div className='profile-3'>
          <li className='profile-4' onClick={() => setActiveSection('Profile')}>Profile</li>
          <li className='profile-4' onClick={() => setActiveSection('My Orders')}>My Orders</li>
          <li className='profile-4' onClick={() => setActiveSection('Downloads')}>Downloads</li>
          <li className='profile-4' onClick={() => setActiveSection('My Questions')}>My Questions</li>
          <li className='profile-4' onClick={() => setActiveSection('My Reports')}>My Reports</li>
          <li className='profile-4' onClick={() => setActiveSection('Logout')}>Logout</li>
        </div>
      </div>

      {/* Conditional Rendering for Profile Form Section */}
      <div className="form-container">
        {activeSection === 'Profile' && (
          <form onSubmit={handleSubmit(onSubmit)} className="form" encType="multipart/form-data">
            <h2 className="header">Create Your Profile</h2>

            <div className="formGroup">
              <label className="label">Profile Image:</label>
              <input
                type="file"
                accept="image/*"
                {...register('image')}
                onChange={handleImageChange}
                className="inputFile"
              />
              {errors.image && <p className="errorText">{errors.image.message}</p>}
              {imagePreview && <img src={imagePreview} alt="Preview" className="imagePreview" />}
            </div>

            <div className="formGroup">
              <label className="label">Name:</label>
              <input type="text" {...register('name')} className="input" />
              {errors.name && <p className="errorText">{errors.name.message}</p>}
            </div>

            <div className="formGroup">
              <label className="label">Email:</label>
              <input type="email" {...register('email')} className="input" />
              {errors.email && <p className="errorText">{errors.email.message}</p>}
            </div>

            <div className="formGroup">
              <label className="label">Contact Number:</label>
              <input type="text" {...register('contact')} className="input" />
              {errors.contact && <p className="errorText">{errors.contact.message}</p>}
            </div>

            <div className="formGroup">
              <label className="label">Bio:</label>
              <textarea {...register('bio')} className="textarea"></textarea>
              {errors.bio && <p className="errorText">{errors.bio.message}</p>}
            </div>

            <div className="formGroup">
              <label className="label">Address:</label>
              <textarea {...register('address')} className="textarea"></textarea>
              {errors.address && <p className="errorText">{errors.address.message}</p>}
            </div>

            <button type="submit" className="submitButton">Submit</button>
          </form>
        )}
        {activeSection !== 'Profile' && (
          <h2>{activeSection} Section</h2> // Placeholder for other sections
        )}
      </div>
    </div>
  );
};

export default Profile;
