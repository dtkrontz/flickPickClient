// modal to signup and be directed to the profile
import React, {useState} from 'react';
import {Modal, ModalHeader, Form, Label,Button , ModalBody, Input} from 'reactstrap';
import './Signup.css'

import ExitIcon from '../../assets/exitIcon.png'
import APIURL from '../../../helpers/environment';

const Signup = (props)=> {
    console.log(props);

     const [username,setUserName] = useState('');
     const [password,setPassword] = useState('');
     const [modal, setModal] = useState(true);

     const regEx = new RegExp (/[a-z]{1,10}[0-9]{1,10}/i);

     const handleSubmit = (event) => {
     event.preventDefault();
     if(password.length<5){
          alert('Password needs to be more than 5 characters')

     } else if (username.length<4) {
          alert('Username needs to be more than 4 characters')
       } else if (regEx.test(username)){
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
          alert('Username needs a number')
        } };

const handleModal = (event) => {
     setModal(false);
     props.signup(false);
 }

    return(
 
        <div>
               <Modal isOpen={modal}  className='signup'>
                    <ModalHeader className='header'style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#9123bf', color:'#fedfff'}}>Signup</ModalHeader>
                    <ModalBody className= 'body'style={{background:'#fffddf'}}>
                  <Form className='form-inputs' onSubmit={handleSubmit}>              
                     
                       <Label style={{display:'flex',justifyContent:'center',alignItems:'center'}}> Username: </Label>
                       <Input style={{display:'flex',justifyContent:'center',alignItems:'center',  background: 'linear-gradient( 90deg ,#9123bf,#fedfff)', color: '#fffddf'}} id='username' name= 'username' type= 'text' onChange={(e) => setUserName(e.target.value)} value={username} >   
                       </Input>
                       <br/>
                       <Label style={{display:'flex',justifyContent:'center',alignItems:'center'}}> Password:</Label>
                       <Input style={{display:'flex',justifyContent:'center',alignItems:'center', background: 'linear-gradient( 90deg ,#9123bf,#fedfff)', color: '#fffddf'}} id='password' name='password' type='password' onChange={(e) => setPassword(e.target.value)} value={password}>
                       </Input>
                       <br />
                       <button className='form-input-btn' onClick={handleSubmit}>Submit</button>
                      <button className= 'form-input-btn' onClick={handleModal}>Exit</button>
                       <br/>
                   </Form>
                   </ModalBody>
               </Modal>
          </div>
    )

}

export default Signup;