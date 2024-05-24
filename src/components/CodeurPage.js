

import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
export const baseURL = "http://localhost:8000";



function CodeurPage({ idCodeur}) {
    const [codeur, setCodeur] = useState(null); 
    useEffect(() => {
        axios
          .get(
            `${baseURL}/codeurs/${idCodeur}`
          )
          .then((res) => setCodeur(res.data))
          .catch((error) => console.log(error));
    }, []);
    return (

		<div className="container">
       
            <div className="row">
            <div className="col-md-6 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/402164/linkedinPhoto.jpg" alt="our-team"/>
                </div>
                <div className="description">
                    <div className="team-prof">
                        <h4>{codeur ? codeur.last_name:""}</h4>
                        <span>Website Manager</span>
                    </div>
                    <ul className="social-links">
                        <li>React est tres populaire</li>
                        <li>Angular est semblable</li>
                        <li>Php continue a faire son temps</li>
                  
                    </ul>
                  
                </div>
            </div>
            <Link className="d-grid gap-2" to="/">
				<Button variant="warning" size="lg">
					Home
				</Button>
			</Link>
        </div>
        </div>    
    	</div>
	);     
}

export default CodeurPage;