import { useState } from "react";








const SignUpForm =() => {
const [userName, setUserName] = useState(``);
const [password, setPassword] = useState(``);
const[error, setError] = useState(null);

const handleSubmit=async(event) =>{
  event.preventDefault();
  console.log(`form was submitted`);
  try {
      const sendData = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`,
     {
      method: "POST", 
      headers: { 
        "Content-Type": "application/json" 
      }, 
      body: JSON.stringify({ 
        username: userName, 
        password: password
      }) 
     })
     const response = await sendData.json();
     console.log(response);


  }catch (error){
    setError(error.message)
  }


}; // end handleSubmit

  return (
   <>
    <h2> Sign Up Form</h2>
    { error && <p>{error}</p> }
    <form onSubmit={handleSubmit}>
      <label>User Name: <input onChange={(event)=>setUserName(event.target.value)}/> </label>
      <label>Password: <input onChange={(event) => setPassword(event.target.value)}/></label>
      <button>Submit</button>
    </form>





  </>)
} // end SignUpForm

export default SignUpForm;