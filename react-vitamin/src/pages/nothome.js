import React, {useState, useEffect} from 'react'; 

const NotHome = () => {
    
    const [counter, setCounter] = useState(0);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (counter < 0) {
          setCounter(0); 
        }
        if (counter > 5) {
            setShowMessage(true);
        } else {
            setShowMessage(false);
        }
      }, [counter]);
    

    const increaseCounter = () => {
        setCounter(prevCount => prevCount + 1);
    };

    const decreaseCounter = () => {
        setCounter(prevCount => prevCount - 1);
    };

  return (
    <div>
      <h2>not home page!</h2>
      <h2>Counter: {counter}</h2>
      {showMessage && (
        <div>
          You passed 5!
        </div>
      )}
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </div>
  );
};

export default NotHome;