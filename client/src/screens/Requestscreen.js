import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Requestscreen() {
  const [requests, setRequests] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

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
    <div className='m-5'>
     {loading ? (<h1>Loading...</h1>): error ? (<h1>Error...</h1>) : (<div>
      <div className='row justify-content-center mt-5 bs'>
        <div className='col-md-6'>
          <h1>{requests.name}</h1>
          <img src={requests.imageurls[0]} className='bigimg' alt=''/>
        </div>
        <div className='col-md-6'>
          <div style={{textAlign: 'right'}}>
          <h1>Request Details</h1>
          <hr/>
          <b>
          <p>Name : </p>
          <p>From Date :</p>
          <p>To Date :</p>
          <p>Needed Foods : {requests.neededfoods}</p>
          </b>
          </div>
          <div style={{textAlign: 'right'}}>
            <b>
            <h1>Amount</h1>
            <hr/>
            <p>Total Days: </p>
            <p>Needed foods per day : {requests.neededfoods}</p>
            <p>Total Needed Foods</p>
            </b>
          </div>
          <div style={{float: "right"}}>
            <button className='btn btn-primary'>Request Now</button>
          </div>
          
        </div>
      </div>
     </div>)}
    </div>
  );
}

export default Requestscreen;
