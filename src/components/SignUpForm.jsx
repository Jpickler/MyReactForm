import { useState } from "react";



const SignUpForm = ({setToken}) => {
  const [userName, setUserName] = useState(``);
  const [password, setPassword] = useState(``);
  const [error, setError] = useState(null);
  const[displayWarning, setDisplayWarning] = useState(false);
  const[formSubmitted,setFormSubmitted] =useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
  

    if (userName.length<8) setDisplayWarning(true); else{  // ensuring at least 8 characters in username start
    
    //console.log(`form was submitted`);
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
      //console.log(response);
      setDisplayWarning(false);
      setFormSubmitted(true);
      setToken(response.token);
    } catch (error) {
      setError(error.message)
    }
  }; // end handleSubmit
};

  return (
    <>
      <h2> Sign Up Form</h2>
      {error && <p class="warningMessage">{error}</p>}
      {displayWarning && <p class="warningMessage">User Names must be a minimum of 8 characters</p>}
      <form onSubmit={handleSubmit}>
        <label>User Name: <input onChange={(event) => setUserName(event.target.value)} /> </label>
        <label>Password: <input onChange={(event) => setPassword(event.target.value)} /></label>
        <button>Submit</button>
      </form>
      {formSubmitted && <p class="successMessage"> Your form has been successfully submitted!</p>}

    </>)
} // end SignUpForm

export default SignUpForm;