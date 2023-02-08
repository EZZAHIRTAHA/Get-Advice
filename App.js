import React from 'react';
import axios from 'axios';
import "./App.css"


const myApi = 'https://api.adviceslip.com/advice'


const App = () => {
    const [advice, setAdvice] = React.useState('')



    const fetchAdvice = () => {
        axios.get(myApi)
            .then((r)=> {
                setAdvice(r.data.slip.advice)
            })
            .catch((error) => {
                console.log("Check your API adress !");
            })
    }

    const handleClick = () => {
        setAdvice(fetchAdvice())
    }

    React.useEffect(()=> {
        fetchAdvice()
    }, [])

    return(

            <div className='card'>
                <p className='card-text'>{advice}</p>
                <button className='card-btn' onClick={handleClick}>Get advice</button>
            </div>
    )
}

export default App;