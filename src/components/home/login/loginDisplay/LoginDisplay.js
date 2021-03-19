import React, {useState} from 'react';
import {Modal, ModalHeader, Form, Label, Input,Button, ModalBody} from 'reactstrap';
import './LoginDisplay.css';

const LoginDisplay = (props)=> {
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

       }  else if (username ===/[a-z\d]{4,10}/i){
            alert('Username needs a number')
       } else {
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
 }}

 const handleModal = (event) => {
     setModal(false);
     props.login(false);
 }

     return (
          <div>
          <Modal isOpen={modal}  className='signup'>
               <ModalHeader className='header'style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#9123bf'}}>Login</ModalHeader>
               <ModalBody className= 'body'style={{background:'#fffddf'}}>
             <Form className='form-inputs' onSubmit={handleSubmit}>              
                
                  <Label style={{display:'flex',justifyContent:'center',alignItems:'center'}}> Username: </Label>
                  <Input style={{display:'flex',justifyContent:'center',alignItems:'center',  background: 'linear-gradient( 90deg ,#9123bf,#fedfff)'}} id='username' name= 'username' type= 'text' placeholder='Enter username' onChange={(e) => setUserName(e.target.value)} value={username} >   
                  </Input>
                  <br/>
                  <Label style={{display:'flex',justifyContent:'center',alignItems:'center'}}> Password:</Label>
                  <Input style={{display:'flex',justifyContent:'center',alignItems:'center', background: 'linear-gradient( 90deg ,#9123bf,#fedfff)', textColor:'black'}} id='password' name='password' type='password' placeholder =' Enter password' onChange={(e) => setPassword(e.target.value)} value={password}>
                  </Input>
                  <br />
                  <button className='form-input-btn' onClick={handleSubmit}>Submit</button>
                 <Button className= 'button' onClick={handleModal} style={{background:'#9123bf'}}>Exit</Button>
                  <br/>
                  <span className='form-input-login'> Don't have an account? Login <a href="http://localhost:3001/user/register">here</a></span>
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