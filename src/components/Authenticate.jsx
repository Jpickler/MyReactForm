import { useState } from "react";


const Authenticate = ({token}) => {

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [authenticatedName, setAuthernticatedName] = useState(null);

const handleClick =async() =>{
    //console.log(`auth button clicked`)
    try{
      const sendData= await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
              { 
                method: "GET", 
                headers: { 
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}` 
                }
              });
        const response=await sendData.json();
        setSuccessMessage(response.message);
        setAuthernticatedName(response.data.username)
     
    }catch (error) {
      setError(error.message);
    }

} //end handleClick


return (
  <>
    <h2>Authenticate</h2>
    {error && <p class="warningMessage">{error}</p>}
    <button onClick={handleClick}>Press for Authentication</button>
    {successMessage && <p class="successMessage"> {successMessage}</p>}
    {authenticatedName && <p> Welcome {authenticatedName}</p>}

  </>
)

}

export default Authenticate;
