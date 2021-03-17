import React, {useState} from 'react';
import {Modal, ModalHeader, Form, Label} from 'reactstrap';
import './LoginDisplay.css';

const LoginDisplay = (props)=> {
    console.log(props);

     const [username,setUserName] = useState('');
     const [password,setPassword] = useState('');
     const [modal, setModal] = useState(true);

     const handleSubmit = (event) => {
     event.preventDefault();
     fetch('http://localhost:3000/user/login',{
          method: 'POST',
          body: JSON.stringify({user:{username: username, password: password }}),
          headers: new Headers({
               'Content-Type': 'application/json'
          })
      })
     .then(response => response.json())
     .then(data => {
         console.log(data);

          props.updateToken(data.token);
     })
     setModal(false);

 }
     return (
          <div>
               <Modal isOpen={modal}  className='login'>
                    <ModalHeader>Login</ModalHeader>
                  <Form className='form-inputs' onSubmit={handleSubmit}>
                       <label> Username: </label>
                       <input id='username' name= 'username' type= 'text' placeholder='Enter username' onChange={(e) => setUserName(e.target.value)} value={username} >   
                       </input>
                       <br/>
                       <label> Password:</label>
                       <input id='password' name='password' type='password' placeholder =' Enter password' onChange={(e) => setPassword(e.target.value)} value={password}>
                       </input>
                       <br />
                       <button className='form-input-btn' onClick={handleSubmit}>Submit</button>
                       <br/>
                       <span className='form-input-login'> Don't have an account? Sign up <a href="http://localhost:3000/user/signup">here</a></span>
                  </Form>
               </Modal>
          </div>

)
}

export default LoginDisplay;
// modal with input fields to login
 
  //patterns to listen for:
// const patterns = {
//      username:/^[a-z\d]{4,10}$/i,// pattern means upper and lowercase accepted and must be 4-10
//      password:/^[\w\W-]{5,10}/$, /*pattern means it accepts all alphanumerical enteries and @#%-*/ 
// }