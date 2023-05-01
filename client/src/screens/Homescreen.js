import React, { useState, useEffect } from "react";
import axios from "axios";
import Request from "../components/Request";

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
    <div>
      <div className="row">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        requests.map(request => {
          return <div className="col-md-9">
            <Request request={request}/>
            </div>;
        })
      )}
      </div>
    </div>
  );
}

export default Homescreen;
