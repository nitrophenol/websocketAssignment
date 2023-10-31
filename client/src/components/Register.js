import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const { username, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            console.log(data);

            // Navigate to login page after successful registration
            navigate("/login");

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => onChange(e)}
                    required
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                    minLength="6"
                    required
                />
            </div>

            <input type="submit" value="Register" />
        </form>
    );
};

export default Register;
