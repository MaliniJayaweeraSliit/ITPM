import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';

function Requestscreen() {
  const [requests, setRequests] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { requestid, fromdate, todate } = useParams();

  const fromdateObj = moment(fromdate, 'DD-MM-YYYY');
  const todateObj = moment(todate, 'DD-MM-YYYY');

  const totaldays = moment.duration(todateObj.diff(fromdateObj)).asDays() + 1;
  const totalfoods = requests ? requests.neededfoods * totaldays : null;

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

  async function requestFood() {
    const requestingDetails = {
      requests: requests,
      userid: JSON.parse(localStorage.getItem('currentUser'))._id,
      fromdate,
      todate,
      totalfoods,
      totaldays,
    };

    try {
      const result = await axios.post('/api/foodrequests/requestfood', requestingDetails)
    }catch (error) {

    }
  }

  return (
    <div className='m-5'>
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : error ? (
        <Error />
      ) : (
        <div>
          <div className='row justify-content-center mt-5 bs'>
            <div className='col-md-6'>
              <h1>{requests?.name}</h1>
              <img src={requests?.imageurls[0]} className='bigimg' alt='' />
            </div>
            <div className='col-md-6'>
              <div style={{ textAlign: 'right' }}>
                <h1>Request Details</h1>
                <hr />
                <b>
                  <p>Name : {JSON.parse(localStorage.getItem('currentUser')).name}</p>
                  <p>From Date : {fromdate}</p>
                  <p>To Date : {todate}</p>
                  <p>Needed Foods : {requests?.neededfoods}</p>
                </b>
              </div>
              <div style={{ textAlign: 'right' }}>
                <b>
                  <h1>Amount</h1>
                  <hr />
                  <p>Total Days: {totaldays}</p>
                  <p>Needed foods per day : {requests?.neededfoods}</p>
                  <p>Total Needed Foods: {totalfoods}</p>
                </b>
              </div>
              <div style={{ float: 'right' }}>
                <button className='btn btn-primary' onClick={requestFood}>Request Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Requestscreen;
