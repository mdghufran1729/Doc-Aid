import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const Register = () => {
  const [photo, setPhoto] = useState("null");
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [degree, setDegree] = useState("");
  const [experience, setExperience] = useState(0);
  const [research, setResearch] = useState("");
  const [citations, setCitations] = useState("");
  const [contact, setContact] = useState(0);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      photo,
      name,
      specialization,
      degree,
      experience,
      research,
      citations,
      contact,
      userName,
      password,
    };
    // You can handle form submission logic here
    // For example, you can send this data to a server using an API call
    const apiUrl = "http://localhost:8090/doctorCnt/save"; // Your friend's API endpoint

    axios
      .post(apiUrl, data)
      .then((response) => {
        // Handle the response from your friend's system
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error sending data:", error);
      });

    // Log the user data for demonstration (you can replace this with your logic)
  };
  return (
    <div className="container">
      <h1 className="heading">Registration Form</h1>
      <div className="upload">
        <label htmlFor="photo">Upload Photo:</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          required
        />
      </div>
      <form
        action="#"
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="Specialization">Specialization:</label>
        <input
          type="Specialization"
          id="Specialization"
          name="Specialization"
          onChange={(e) => setSpecialization(e.target.value)}
          required
        />
        <label htmlFor="Degree">Degree:</label>
        <input
          type="Degree"
          id="Degree"
          name="Degree"
          onChange={(e) => setDegree(e.target.value)}
          required
        />
        <label htmlFor="Experience">Experience:</label>
        <input
          type="Experience"
          id="Experience"
          name="Experience"
          required
          onChange={(e) => setExperience(e.target.value)}
        />
        <label htmlFor="Research Journals">Research Journals:</label>
        <input
          type="Research Journals"
          id="Research Journals"
          name="Research Journals"
          onChange={(e) => setResearch(e.target.value)}
          required
        />
        <label htmlFor="Citations">Citations:</label>
        <input
          type="Citations"
          id="Citations"
          name="Citations"
          onChange={(e) => setCitations(e.target.value)}
          required
        />
        <label htmlFor="Contact">Contact:</label>
        <input
          type="Contact"
          id="Contact"
          name="Contact"
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <label htmlFor="User name">User name:</label>
        <input
          type="User name"
          id="User name"
          name="User name"
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <label htmlFor="Password">Password:</label>
        <input
          type="password"
          id="Password"
          name="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" defaultValue="Register" />
      </form>
    </div>
  );
};

export default Register;
