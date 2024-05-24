// Filename - components/Home.js

import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";

export const baseURL = "http://localhost:5000";

function Home() {
	let history = useNavigate();
	const [codeurs, setCodeurs] = useState([]); 

    useEffect(() => {
        axios
          .get(
            `${baseURL}/codeurs`
          )
          .then((res) => setCodeurs(res.data))
          .catch((error) => console.log(error));
    }, []);


	function setID(id, name, experience) {
		
	}

	// Deleted function - functionality
	// for deleting the entry
	/*function deleted(id) {
		let index = array
			.map(function (e) {
				return e.id;
			})
			.indexOf(id);

		// deleting the entry with index
		array.splice(index, 1);

		// We need to re-render the page for getting
		// the results so redirect to same page.
		history("/");
	}*/

	return (
		<div style={{ margin: "5rem" }}>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>Name</th>
						<th>Prenom</th>
						<th>Experience</th>
					</tr>
				</thead>
				<tbody>
					
					{codeurs.map((item) => {
						return (
							<tr>
								<td>{item.firstname}</td>
								<td>{item.lastname}</td>

								<td>{item.experience}</td>

								{/* getting theid,name, and 
									age for storing these
									value in the jsx with 
									onclick event */}
								<td>
									<Link to={`/edit`}>
										<Button
											onClick={(e) =>
												setID(
													item.id,
													item.name,
													item.experience
												)
											}
											variant="info"
										>
											Update
										</Button>
									</Link>
								</td>

								{/* Using thr deleted function passing
									the id of an entry */}
								<td>
									<Button
										
										variant="danger"
									>
										Delete
									</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>

			{/* Button for redirecting to create page for
				insertion of values */}
			<Link className="d-grid gap-2" to="/create">
				<Button variant="warning" size="lg">
					Create
				</Button>
			</Link>
		</div>
	);
}

export default Home;
