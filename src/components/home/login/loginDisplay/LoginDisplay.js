import React, {useState} from 'react';
import {Modal, ModalHeader, Form, Label, Input,Button, ModalBody} from 'reactstrap';
import './LoginDisplay.css';
import APIURL from '../../../../helpers/environment';

const LoginDisplay = (props)=> {
    console.log(props);

     const [username,setUserName] = useState('');
     const [password,setPassword] = useState('');
     const [modal, setModal] = useState(true);

     const handleSubmit = (event) => {
     event.preventDefault();
     fetch(`${APIURL}/user/login`,{
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

 const handleModal = (event) => {
     setModal(false);
     props.login(false);
 }

     return (
          <div>
          <Modal isOpen={modal}  className='signup'>
               <ModalHeader className='header'style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#9123bf', color:'#fedfff'}}>Login</ModalHeader>
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

export default LoginDisplay;
// modal with input fields to login
 
  //patterns to listen for:
// const patterns = {
//      username:/^[a-z\d]{4,10}$/i,// pattern means upper and lowercase accepted and must be 4-10
//      password:/^[\w\W-]{5,10}/$, /*pattern means it accepts all alphanumerical enteries and @#%-*/ 
// }