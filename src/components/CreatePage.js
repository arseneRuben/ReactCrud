// Filename - components/Create.js

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export const baseURL = "http://localhost:8000";

function CreatePage() {
	// Making usestate for setting and
	// fetching a value in jsx
    const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [experience, setExperience] = useState("");

	// Using useNavigation for redirecting to pages
	let history = useNavigate();

	// Function for creating a post/entry
	const handelSubmit = async(e) => {
		e.preventDefault(); // Prevent reload

		// Fetching a value from usestate and
		// pushing to javascript object
		
		if (firstName == "" || lastName == ""|| experience == "" ||!(experience == "JUNIOR" ||experience == "INTERMEDIAIRE" ||experience == "SEINIOR")) {

			alert("invalid input");
			return;
		}
       
        try {
            const result = await axios.post( `${baseURL}/codeurs`, {
                firstname:firstName, lastname: lastName,experience:experience 
            });

        } catch (error) {
            console.error('Error sending POST request:', error);
        }

		// Redirecting to home page after creation done
		history("/");
	};

	return (
		<div>
			<Form
				className="d-grid gap-2"
				style={{ margin: "5rem" }}
			>
				{/* Fetching a value from input textfirld 
					in a setname using usestate*/}
				<Form.Group
					className="mb-3"
					controlId="formFirstName"
				>
					<Form.Control
						onChange={(e) =>
							setFirstName(e.target.value)
						}
						type="text"
						placeholder="Enter Firstname"
						required
					/>
				</Form.Group>

				{/* Fetching a value from input textfirld in
					a setage using usestate*/}
				<Form.Group
					className="mb-3"
					controlId="formLastName"
				>
					<Form.Control
						onChange={(e) =>
							setLastName(e.target.value)
						}
						type="text"
						placeholder="Enter Lastname"
						required
					/>
				</Form.Group>
                {/* Fetching a value from input textfirld in
					a setage using usestate*/}
				<Form.Group
					className="mb-3"
					controlId="formExperience"
				>
					<Form.Control
						onChange={(e) =>
							setExperience(e.target.value)
						}
						type="text"
						placeholder="Enter experience"
						required
					/>
				</Form.Group>

				{/* handing a onclick event in button for
					firing a function */}
				<Button
					onClick={(e) => handelSubmit(e)}
					variant="primary"
					type="submit"
				>
					Submit
				</Button>

				{/* Redirecting back to home page */}
				<Link className="d-grid gap-2" to="/">
					<Button variant="info" size="lg">
						Home
					</Button>
				</Link>
			</Form>
		</div>
	);
}

export default CreatePage;
