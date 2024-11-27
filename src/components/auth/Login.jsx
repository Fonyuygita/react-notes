import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()
    const { login } = useContext(AuthContext)

    const validate = () => {
        let tempErrors = {};
        tempErrors.username = formData.username ? '' : 'Email is required.';
        // tempErrors.email = /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Email is not valid.';
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            // Handle form submission
            const dataToSend = {
                username: formData.username,
                password: formData.password
            };
            try {
                const response = await login(dataToSend)
                navigate("/profile")

                console.log('User registered:', response.data);
            } catch (error) {
                console.error('Error registering user:', error);
            }
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="username" name="username" value={formData.username} onChange={handleInputChange} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <button type="submit" className='btn'>Login</button>
                </form>
                <h3>Or use socials</h3>
                <div className="social-login">
                    <button className="social"><FaGithub size={30} /></button>
                    <button className="social"><FaGoogle size={30} /> </button>
                    <button className="social"><FaFacebook size={30} /></button>
                    <button className="social"><FaXTwitter size={30} /></button>
                </div>
            </div>
        </div>
    );
};

export default Login;
