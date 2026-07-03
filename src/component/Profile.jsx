import { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(
      "http://localhost:5000/api/users/profile",
      {
        headers: {
          Authorization:
            localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setUser(data.user));
  }, []);

  return (
     <div className="profile-page">
        <div className="profile-banner">
          <div className="profile-content">
            <h1>Welcome</h1>

            <h2>Protected Route Accessed Successfully</h2>

            {user && (
              <h2>User ID : {user.id}</h2>
            )}

            <p>
              Create your account and access the User Authentication
              System built with React, Node.js, Express.js and PostgreSQL.
            </p>
          </div>
        </div>
      </div>
  );
}

export default Profile;