import React, { useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function UpdateVolunteer() {
    const { id, from_login } = useParams()
    const [volunteer, setVolunteer] = useState()
    const [firstname, setVolunteer_firstname] = useState("");
    const [lastname, setVolunteer_lastname] = useState("");
    const [username, setVolunteer_username] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirth_day] = useState("");
    const [phone, setPhone] = useState("");
    const history = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:4000/volunteers/getvolunteer/${id}`)
            .then((result) => {
                setVolunteer(result["data"])
                if (volunteer) {
                    setVolunteer_firstname(volunteer["volunteer_firstname"])
                    setVolunteer_lastname(volunteer["volunteer_lastname"])
                    setVolunteer_username(volunteer["volunteer_username"])
                    setEmail(volunteer["email"])
                    setPassword(volunteer["password"])
                    setBirth_day(volunteer["birth_day"])
                    setPhone(volunteer["phone"])

                }
            })
            .catch(err => console.log(`get volunteer data failed ${err}`))

    }, [id])

    const updateVolunteer = async () => {
        if (firstname !== "" && lastname !== "" && username !== "" &&password !== "" && birthday !== "" && email !== ""&& phone !== "") {
            const data = {
                Volunteer_firstname: firstname,
                Volunteer_lastname: lastname,
                volunteer_username: username,
                email:email,
                birth_day: birthday,
                password:password,
                phone:phone

            }
            await axios
                .patch(
                    `http://localhost:4000/volunteers/updatevolunteer/${id}`
                    , data
                ).then(result => {
                    if (result.status === 200) {
                        alert("Update Successfull");
                        history(`/volunteers/getvolunteer/${id}/true`);
                    } else {
                        alert("Update failed,Try again")
                    }
                })
                .catch(err => console.log(`update volunteer failed ${err}`))
        }
    }



    return (
        <section className='mainmaindiv'>
                <center>
                    <div className="maindiv">
                        <div>
                            {
                                volunteer &&
                                <form >
                                    <div className="subdiv">
                                        <label htmlFor="email" className="headingtext">Volunteer First Name</label>                            <br />
                                        <input
                                        
                                            onChange={(val) => { setVolunteer_firstname(val.target.value) }}
                                            value={firstname} type="text" id="firstname" className="headinginput"
                                        ></input>
                                    </div>
                                    <div className="subdiv">
                                        <label htmlFor="email" className="headingtext">Volunteer Last Name</label>                            <br />
                                        <input
                                            onChange={(val) => { setVolunteer_lastname(val.target.value) }}
                                            value={lastname} type="text" id="firstname" className="headinginput"
                                        ></input>
                                    </div>
                                    <div className="subdiv">
                                        <label htmlFor="email" className="headingtext">Volunteer UserName</label>                            <br />
                                        <input
                                            onChange={(val) => { setVolunteer_username(val.target.value) }}
                                            value={username} type="text" id="firstname" className="headinginput"
                                        ></input>
                                    </div>
                                    <div className="subdiv">
                                        <label htmlFor="email" className="headingtext">Volunteer Email</label>                            <br />
                                        <input
                                            onChange={(val) => { setEmail(val.target.value) }}
                                            value={email} type="text" id="firstname" className="headinginput"
                                        ></input>
                                    </div>
                                    <div className="subdiv">
                                        <label htmlFor="email" className="headingtext">Volunteer Password</label>                            <br />
                                        <input
                                            onChange={(val) => { setPassword(val.target.value) }}
                                            value={password} type="password" id="firstname" className="headinginput"
                                        ></input>
                                    </div>
                                    <div className="subdiv">
                                        <label htmlFor="email" className="headingtext">Confirm Password</label>                            <br />
                                        <input
                                            onChange={(val) => { setPassword(val.target.value) }}
                                            value={password} type="password" id="firstname" className="headinginput"
                                        ></input>
                                    </div>
                                    <div className="subdiv">
                                        <label htmlFor="email" className="headingtext">Volunteer Birth</label>                            <br />
                                        <input
                                            onChange={(val) => { setBirth_day(val.target.value) }}
                                            value={birthday} type="text" id="firstname" className="headinginput"
                                        ></input>
                                    </div>
                                    <div className="subdiv">
                                        <label htmlFor="email" className="headingtext">Volunteer Phone Number</label>                            <br />
                                        <input
                                            
                                            onChange={(val) => { setPhone(val.target.value) }}
                                            value={phone} type="text" id="firstname" className="headinginput"
                                        ></input>
                                    </div>
                                    <button type="submit" onClick={(e) => { e.preventDefault(); updateVolunteer() }} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">SUBMIT</button>
                                </form>
                            }
                        </div>
                    </div>
                </center>
                <br></br>
               
            
        </section>
    );
};


