// API key = AIzaSyAPKTEEdStE-z9j7FIM2B_pv0KMQVdh7Hk
import React from 'react';
import { useEffect } from 'react';
  

const Civic = (props) => {
const [state, setState] = React.useState({});

useEffect(() => {
    var states = {2:"ak",
    1:"al",
    5:"ar",
    60:"as",
    4:"az",
    6:"ca",
    8:"co",
    9:"ct",
    11:"dc",
    10:"de",
    12:"fl",
    13:"ga",
    66:"gu",
    15:"hi",
    19:"ia",
    16:"id",
    17:"il",
    18:"in",
    20:"ks",
    21:"ky",
    22:"la",
    25:"ma",
    24:"md",
    23:"me",
    26:"mi",
    27:"mn",
    29:"mo",
    28:"ms",
    30:"mt",
    37:"nc",
    38:"nd",
    31:"ne",
    33:"nh",
    34:"nj",
    35:"nm",
    32:"nv",
    36:"ny",
    39:"oh",
    40:"ok",
    41:"or",
    42:"pa",
    72:"pr",
    44:"ri",
    45:"sc",
    46:"sd",
    47:"tn",
    48:"tx",
    49:"ut",
    51:"va",
    78:"vi",
    50:"vt",
    53:"wa",
    55:"wi",
    54:"wv",
    56:"wy"}
    var state = states[37] //placeholder but we need to get state number from props
    var district = 3 //placeholder but we need to get district number from props
    var senatorDivision = "ocd-division%2Fcountry%3Aus%2Fstate%3A"+state
    var houseDivision = senatorDivision + "%2Fcd%3A"+ district
    var senatorURL = "https://www.googleapis.com/civicinfo/v2/representatives/"+senatorDivision+"?key=AIzaSyAPKTEEdStE-z9j7FIM2B_pv0KMQVdh7Hk&levels=country&roles=legislatorUpperBody"
    var houseURL = "https://www.googleapis.com/civicinfo/v2/representatives/"+houseDivision+"?key=AIzaSyAPKTEEdStE-z9j7FIM2B_pv0KMQVdh7Hk&levels=country&roles=legislatorLowerBody"
    
    fetch(senatorURL)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Senators:")
          for (let i = 0; i<result.officials.length; i++){
              console.log("Senator " + result.officials[i].name)
              if (result.officials[i].urls && result.officials[i].urls.length > 0) {
                console.log(result.officials[i].urls[0])
            }
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          
        }
      )

      fetch(houseURL)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("House Representatives:")
          for (let i = 0; i<result.officials.length; i++){
              console.log("Representative " + result.officials[i].name)
              if (result.officials[i].urls && result.officials[i].urls.length > 0) {
                console.log(result.officials[i].urls[0])
            }
          }
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