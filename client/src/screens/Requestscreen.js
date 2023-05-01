import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Requestscreen() {
  const [requests, setRequests] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { requestid } = useParams();

  useEffect(() => {
    async function getRequestById() {
      try {
        setLoading(true);
        const { data } = await axios.post('/api/requests/getrequestbyid', {
          requestid,
        });
        setRequests(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    getRequestById();
  }, [requestid]);

  return (
    <div>
      <h1>Request screen</h1>
      <h1>Request id = {requestid}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error occurred while fetching request.</p>}
      {requests && (
        <div>
          <p>Request details:</p>
          <p>Request id: {requests.id}</p>
          <p>Request status: {requests.status}</p>
        </div>
      )}
    </div>
  );
}

export default Requestscreen;
