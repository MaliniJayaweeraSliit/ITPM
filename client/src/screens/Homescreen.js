import React, { useState, useEffect } from "react";
import axios from "axios";
import Request from "../components/Request";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Homescreen() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const data = (await axios.get("/api/requests/getallrequests")).data;
      setRequests(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
      {loading ? (
        <Loader/>
      ) : requests.length > 1 ? (
        requests.map(request => {
          return <div className="col-md-9 mt-3">
            <Request request={request}/>
            </div>;
        })
      ) : (<Error/>)}
      </div>
    </div>
  );
}

export default Homescreen;
