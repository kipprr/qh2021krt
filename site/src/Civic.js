// API key = AIzaSyAPKTEEdStE-z9j7FIM2B_pv0KMQVdh7Hk
import React from 'react';
import { useEffect } from 'react';
  

const Civic = (props) => {
const [state, setState] = React.useState({});

useEffect(() => {
    fetch("https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAPKTEEdStE-z9j7FIM2B_pv0KMQVdh7Hk&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          
        }
      )
  }, [])

return (
    <div>


    <p>Hello World</p>


    </div>
)
}

export default Civic;