import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birth' : '911222',
  'gender' : '남자',
  'job' : '대학생'
},{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '나동빈',
  'birth' : '961225',
  'gender' : '남자',
  'job' : '대학생'
},{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '홍서범',
  'birth' : '781225',
  'gender' : '남자',
  'job' : '가수'
}]

class App extends Component {
  render() {
    return(
      <div>
        {
          customers.map (c=>{
            return (
              <Customer 
              key={c.id}
              id={c.id}
              name={c.name}
              image={c.image}
              gender={c.gender}
              birth={c.birth}
              job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
