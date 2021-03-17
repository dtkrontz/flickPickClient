// modal to signup and be directed to the profile
import React, {useState} from 'react';
import {Modal, ModalHeader, Form, Label, InputGroupText, Alert} from 'reactstrap';
import './Signup.css'

const Signup = (props)=> {
    console.log(props);

     const [username,setUserName] = useState('');
     const [password,setPassword] = useState('');
     const [modal, setModal] = useState(true);

     const handleSubmit = (event) => {
     event.preventDefault();
     if(password.length<5){
          alert('Password needs to be more than 5 charaters')

     }else if (username.length<4) {
          alert('Username needs to be more than 4 charaters')
          
       }  else if (username ===/^[a-z\d]{4,10}$/i){
            alert('Username needs a number and a special charater')
       } else{
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
     };

const handleModal = (event) => {
     setModal(false);
     props.signup(false);
 }

    return(
    <div>
    <Modal isOpen={modal}  className='Signup'>
         <ModalHeader>Signup</ModalHeader>
         <ModalHeader><button onClick={handleModal}>X</button></ModalHeader>
       <Form onSubmit={handleSubmit}>
            <Label> Username: </Label>
            <input id='username' name= 'username' type= 'text' placeholder='Enter username' onChange={(e) => setUserName(e.target.value)} value={username} >   
           </input>
            <br/>
            <Label>Password:</Label>
            <input id='password' name='password' type='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} value={password}>
            </input>
            <br />
            <button className ="form-input-btn" onClick={handleSubmit}>Sign up</button>
            <br />

            <span className='form-input-login'> Already have an account? Login <a href="http://localhost:3000/user/login"> here</a> </span>
       </Form>
    </Modal>
</div>
    )
}

export default Signup;