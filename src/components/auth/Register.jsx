import React, { useState } from 'react';
import { FaGithub, FaGoogle, FaFacebook, FaCamera } from 'react-icons/fa';
import './Form.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        image: null,
        imagePreview: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    // const navigate = useNavigate()

    const validate = () => {
        let tempErrors = {};
        tempErrors.username = formData.username ? '' : 'Username is required.';
        tempErrors.email = formData.email ? '' : 'Email is required.';
        tempErrors.email = /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Email is not valid.';
        tempErrors.password = formData.password ? '' : 'Password is required.';
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === '');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            image: file,
            imagePreview: URL.createObjectURL(file)
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            // Handle form submission
            console.log(formData);

            const formDataToSend = new FormData();
            formDataToSend.append('username', formData.username);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('password', formData.password);
            formDataToSend.append('image', formData.image);

            try {
                const response = await axios.post('http://localhost:5000/auth/register', formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                navigate("/login")

                console.log('User registered:', response.data);
            } catch (error) {
                console.error('Error registering user:', error);
            }
        }
    };

    return (
        <div className="auth-container">
            <div className="cover-image"></div>
            <div className="auth-card">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder='Username' />
                        {errors.username && <span className="error">{errors.username}</span>}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Email' />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder='Password' />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <div className="form-group">
                        <label>Upload Image <FaCamera /></label>
                        <input type="file" onChange={handleImageChange} />
                        {formData.imagePreview && <img src={formData.imagePreview} alt="Preview" className="image-preview" />}
                    </div>
                    <button type="submit" className='btn'>Register</button>
                </form>

            </div>
        </div>
    );
};

export default Registration;
