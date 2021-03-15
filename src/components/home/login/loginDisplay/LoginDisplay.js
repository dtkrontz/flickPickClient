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
          props.updateToken(data.sessionToken);
     })
     setModal(false);

}
     return (
          <div>
               <Modal isOpen={modal}  className='login'>
                    <ModalHeader>Login</ModalHeader>
                  <Form onSubmit={handleSubmit}>
                       <Label> Username </Label>
                       <input id='username' name= 'username' type= 'text' required minLength= "4" onChange={(e) => setUserName(e.target.value)} value={username} >   
                       </input>
                       <Label> Password</Label>
                       <input id='password' name='password' type='password' required minLength='5' onChange={(e) => setPassword(e.target.value)} value={password}>
                       </input>
                       <button onClick={handleSubmit}>Submit</button>
                  </Form>
               </Modal>
          </div>

)
}

export default LoginDisplay;
// modal with input fields to login
