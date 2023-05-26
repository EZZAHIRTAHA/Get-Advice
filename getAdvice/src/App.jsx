import React from 'react';
// import axios from 'axios'; You can either use Axios or Fetch
import "./App.css"


const myApi = 'https://api.adviceslip.com/advice'


const App = () => {
    const [advice, setAdvice] = React.useState('')


// ************* Using axios ****************
    // const fetchAdvice = () => {
    //     axios.get(myApi)
    //         .then((r)=> {
    //             setAdvice(r.data.slip.advice)
    //         })
    //         .catch((error) => {
    //             console.log("Check your API adress !");
    //         })
    // }

    // const handleClick = () => {
    //     setAdvice(fetchAdvice())
    // }

    // React.useEffect(()=> {
    //     fetchAdvice()
    // }, [])

    
// ************** Using Fetch ******************
const fetchAdvice = () => {
    fetch(myApi)
        .then((response) => response.json())  // Added response.json() to parse the response
        .then((data) => {
            setAdvice(data.slip.advice);
        })
        .catch((error) => {
            console.log("Check your API address!");
        });
};

const handleClick = () => {
    fetchAdvice();  // Removed setAdvice() from handleClick since fetchAdvice doesn't return anything
};

React.useEffect(() => {
    fetchAdvice();
}, []);


    return(

            <div className='card'>
                <p className='card-text'>{advice}</p>
                <button className='card-btn' onClick={handleClick}>Get advice</button>
            </div>
    )
}

export default App;