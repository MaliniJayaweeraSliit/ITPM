import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';


function Registerscreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();



    async function register() {
        if(password == cpassword) {
            const user = {
                name,
                email,
                password,
                cpassword
            }
            try {
                setLoading(true);
                const result = await axios.post('/api/users/register', user).data
                setLoading(false);
                setSuccess(true);

            setName('')
            setEmail('')
            setPassword('')
            setCpassword('')

            } catch (error) {
                console.log(error)
                setLoading(false);
                setError(true);
            }
        } else {
            alert('Passwords not matched!')
        }
    }
  return (
    <div>
        {loading && (<Loader/>)}
        {error && (<Error/>)}
        
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5'>
            {success && (<Success message='Registration Sucesss'/>)}
            <div className='bs'>
            <h2>Register</h2>
            <input type='text' className='form-control' placeholder='Name'
            value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type='text' className='form-control' placeholder='Email'
            value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type='password' className='form-control' placeholder='Password'
            value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <input type='password' className='form-control' placeholder='Confirm Password'
            value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}}/>

            <button className='btn btn-primary mt-3' onClick={register}>Register</button>
            </div>
            </div>
        </div>
    </div>
  )
}
export default Registerscreen