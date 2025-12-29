import React, { useState } from 'react';
import './App.css';
import data from './data';
import Tours from './Components/Tours';

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    // in this line what we are saying is that out of the tours data filter out that tour whose id does not matches with the passed id and hence the id that has been passed will be removed.
    setTours(newTours);
  }
  // this removeTour function that we have introduce will be called here and what it does is that out of all the 7 pictures it will filter out the one picture that we have called with an id name and then we have saved it in a variable newTours and the setTour  re-rendere the page where only 6 pictures will be on tha page.


  if (tours.length === 0) {
    return (
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
  };
  // this if statement say that if all the tours has been selected as not intrested then a no tour left heading will appear and a refresh button will appear which upon clicking will re-render all the tours

  return (
    <div className="App">

      <Tours tours={tours} removeTour={removeTour}></Tours>

    </div>
  );
}

export default App;
