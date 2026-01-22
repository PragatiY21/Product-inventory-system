import {useState} from 'react';
//import Dashboard from './Dashboard';
//import { useNavigate } from 'react-router';

const Login =()=>{
    const [input, setInput]=useState('');
    const [pass, setPass]=useState('');
    const [error, setError]=useState('');
    const [passerror, setPasserror] =useState('');
   // const navigate=useNavigate();
const handleSubmit= (e)=>{
 e.preventDefault();
 //console.log(input);
 //console.log(pass)

localStorage.setItem("username" ,input);
localStorage.setItem("pass", pass);

//navigate('./Dashboard');

 if(input.length>7){
    setError('input length should not be greater than 7');
 }else{
    setError('');
 }

 if(passerror.length <4){
    setPasserror('input length should not be greater than 7');
 }else{
    setPasserror('');
 }

}




return (<div>
    <form onSubmit={handleSubmit} className='formfield'>
        <input type='text' placeholder="enter username" value={input} onChange={(e)=>setInput(e.target.value)}/> {error && (<p style={{color:"red"}}>{error}</p>)}
        <input type='password' placeholder="enter password" value={pass} onChange={(e)=>setPass(e.target.value)}/> {passerror && (<p style={{color:"red"}} >{passerror}</p>)}
        <button type='submit'>Submit</button>
    </form>
</div>)
}

export default Login;