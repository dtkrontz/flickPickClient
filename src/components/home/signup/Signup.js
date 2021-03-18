// modal to signup and be directed to the profile
import React, {useState} from 'react';
import {Modal, ModalHeader, Form, Label, } from 'reactstrap';
import './Signup.css'
import APIURL from '../../../helpers/environment';


const Signup = (props)=> {
    console.log(props);

     const [username,setUserName] = useState('');
     const [password,setPassword] = useState('');
     const [modal, setModal] = useState(true);

     const regEx = new RegExp (/[a-z\d]{1,10}[0-9]{1,10}/i);

     const handleSubmit = (event) => {
     event.preventDefault();
     if( regEx.test(username) && password.length < 5 && username.length < 4){
          fetch(`${APIURL}/user/register`,{
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
     } else {
          alert('Username needs to be more than 4 charaters and include a number.  Password needs to be more than 5 characters')
       }};

const handleModal = (event) => {
     setModal(false);
     props.signup(false);
 }

    return(
 
        <div>
               <Modal isOpen={modal}  className='signup'>
                    <ModalHeader>Signup</ModalHeader>
                  <Form className='form-inputs' onSubmit={handleSubmit}>                  
                      <ModalHeader><button onClick={handleModal}>Exit</button></ModalHeader>
                       <Label> Username: </Label>
                       <input id='username' name='username' type= 'text' placeholder='Enter username' onChange={(e) => setUserName(e.target.value)} value={username} >   
                       </input>
                       <br/>
                       <Label> Password:</Label>
                       <input id='password' name='password' type='password' placeholder =' Enter password' onChange={(e) => setPassword(e.target.value)} value={password}>
                       </input>
                       <br />
                       <button className='form-input-btn' onClick={handleSubmit}>Submit</button>
                       <br/>
                       <span className='form-input-login'> Don't have an account? Login <a href="http://localhost:3001/user/register">here</a></span>
                  </Form>
               </Modal>
          </div>
    )

}

export default Signup;