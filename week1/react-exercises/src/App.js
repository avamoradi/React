import './App.css';
import React from 'react';
import HobbyList from './1Hobbies';
import Guarantee from './2CustomerServive';
import Counter from './3Counter';

//exercise1
const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];

//exercise 2
const comment = [
  {description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  title: 'Online support 24/7',
  imgUrl: 'chat.png'},
  {description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  title: '100% Money back',
  imgUrl: './coin.png'},
  {description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  title: 'Free shipping',
  imgUrl: './f-delivery.png'}
];

function App() {
  return (
    <>
    <div>
          <HobbyList hobbies ={hobbies} />
    </div>
    <div className="flex"> 
    < Guarantee  
                 description = {comment[0].description}
                 title = {comment[0].title}
                 imgUrl = {comment[0].imgUrl}
    
    />
    < Guarantee  
                 description = {comment[1].description}
                 title = {comment[1].title}
                 imgUrl = {comment[1].imgUrl}
    
    />
    < Guarantee  
                 description = {comment[2].description}
                 title = {comment[2].title}
                 imgUrl = {comment[2].imgUrl}
     />
    </div>

    <div>
      <Counter/>
    </div>
    </>
   );
}
   


export default App;
