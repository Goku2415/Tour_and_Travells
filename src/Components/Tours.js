
import Card from './Card'

function Tours({ tours, removeTour }) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Welcome to Gariya travells </h2>
            </div>

            <div className='cards'>
                {
                    tours.map((tour) => {
                        //we have used map function to create multiple cards by creating only once.
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                        //here we have used the spread operator for tours just to pass the tour data to the  card component in order to access the data in the cards component using as a parameter(id ,name,info,price,etc..)


                        // always keep in mind to pass a unique identifier , it could be id or it could be index of the element. 
                    })
                }

            </div>
        </div>
    );

}


export default Tours;