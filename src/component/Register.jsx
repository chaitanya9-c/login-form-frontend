import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile_number: "",
    gender: "",
    date_of_birth: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.mobile_number)) {
      alert("Mobile number must be exactly 10 digits");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Registration Successful");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="auth-container">
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="mobile_number"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="gender"
            placeholder="Gender"
            onChange={handleChange}
          />

          <input
            type="date"
            name="date_of_birth"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit">
            Sign Up
          </button>
          <p style={{ marginTop: "15px" }}>
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
      </form>
     </div>
    </div>
  );
}

export default Register;