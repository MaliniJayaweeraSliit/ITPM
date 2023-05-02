import React, {useState, useEffect} from 'react'

function Registerscreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    function register() {
        if(password ==cpassword) {
            const user = {
                name,
                email,
                password,
                cpassword
            }
            console.log(user)
        } else {
            alert('Passwords not matched!')
        }

    }
  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5'>
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