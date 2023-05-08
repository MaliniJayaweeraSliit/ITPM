import React, { useState, useEffect } from "react";
import axios from "axios";
import { DatePicker, Space } from 'antd';
import moment from 'moment'
import Request from "../components/Request";
import Loader from "../components/Loader";
import Error from "../components/Error";


const { RangePicker } = DatePicker;


function Homescreen() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const[fromdate, setfromdate] = useState();
  const[todate, settodate] = useState();

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

  

  function filterByDate(date) {
    console.log("date:", date);
    console.log(moment(date[0]).format('DD-MM-YYYY'))
    console.log(moment(date[1]).format('DD-MM-YYYY'))
    setfromdate(moment(date[0]).format('DD-MM-YYYY'))
    settodate(moment(date[1]).format('DD-MM-YYYY'))
  }
  

  
  return (
    <div className="container">
      <div className="row mt-5">

        <div className="col-md-3">
          <RangePicker format='DD-MM-YYYY' onChange={filterByDate}/>
        </div>

      </div>



      <div className="row justify-content-center mt-5">
      {loading ? (
        <Loader/>
      ) : requests.length > 1 ? (
        requests.map(request => {
          return <div className="col-md-9 mt-3">
            <Request request={request} fromdate={fromdate} todate={todate}/>
            </div>;
        })
      ) : (<Error/>)}
      </div>
    </div>
  );
}

export default Homescreen;
