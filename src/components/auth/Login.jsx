import React, { useState } from 'react';
import { FaGithub, FaGoogle, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Handle form submission
            console.log(formData);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
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
