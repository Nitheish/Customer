import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginPage.css';
function LoginPage() {


  const cred={
    name:"Nitheish",
    password:"nitheish2312"
  }
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [authError, setAuthError] = useState(false);
  // const [o, seto] = useState(true);

  //   event.preventDefault();
  //   try {
  //     const response = await axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=f3a0bbdff39a2e877b5586ba7781a0ea`);
  //     const token = response.data.request_token;
  //     const authResponse = await axios.post(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=f3a0bbdff39a2e877b5586ba7781a0ea`, {
  //       username,
  //       password,
  //       request_token: token,
  //     });
  //     if (o) {
  //       <Link to='/home' />
  //     } else {
  //       setAuthError(true);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const initialValues = { name: "", password: "" };
   
    const [formValues, setFormValues] = useState(initialValues);
    const [error, setError] = useState("")

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
console.log(formValues.name, formValues.password);

        if ( formValues.name !== cred.name && formValues.password !== cred.password) {
            setError("true")
        }


        if (formValues.name === cred.name && formValues.password === cred.password) {
              
                navigate('/home')
                
        }else{
          toast.error('Invalid username or password');
        }
    }

  return (
    <div className="background-image">
    

        <form onSubmit={handleSubmit}>
        
  <div className="card">
    <div className="card-body">
      <h1>Sign In</h1>
      <br/>
      <div className="mb-3">
       
        <input type="text" className="form-control"  id="name"
                
                name='name'
                onChange={handleChange} placeholder="Username" />
      </div>
      <div className="mb-3">
       
        <input onChange={handleChange}
                name='password'
                id="password"
                type="password" className="form-control"  placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </div>
  </div>
  
</form>

</div>
    
  )
}
export default LoginPage;
