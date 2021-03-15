import{useState} from 'react';
import './loginDisplay.css';

const Login = (props)=> {
     const [username,setUserName] = useState('');
     const [password,setPassword] = useState('');
     const handleSubmit = (event) => {
     event.preventDefault();
     fetch('http://localhost:4001/user/login',{
          method: 'POST',
          body: JSON.stringify({user:{username: username, password:password }}),
          headers: new headers({
               'Content-Type': 'application/json'
          })
     })
     .then((response) => response.JSON())
     .then((data) => {
          props.updateToken(data.sessionToken);
     })

}
     return (
          <div>
               <modal isOpen={modal}  className={login}>
                    <modalHeader>Login</modalHeader>
                  <form>
                       <div id='error'></div>
                       <label> Username </label>
                       <input id='username' name= 'username' type= 'text' required minLength= "4" >
                            
                       </input>
                       <label> Password</label>
                       <input id='password' name='name' type='password' required minLength='5'>

                       </input>
                  </form>
               </modal>
          </div>

)
}








export default LoginDisplay;