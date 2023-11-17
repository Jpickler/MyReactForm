import { useState } from "react";


const Authenticate = (token) => {

  const [error, setError] = useState(null);

const handleClick =async() =>{
    console.log(`auth button clicked`)
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
        console.log(response);
        console.log(`token is: `, token);


    }catch (error) {
      setError(error.message);
    }

} //end handleClick


return (
  <>
    <h2>Authenticate</h2>
    {error && <p>{error}</p>}
    <button onClick={handleClick}>Press for Authentication</button>

  </>
)

}

export default Authenticate;
