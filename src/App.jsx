import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {

  const [data, setData] = useState([])
  useEffect(() => {
    const data = require('./data.json')
    setData(data)
  }, [])

  return (
    <div className="App">
      <NavBar />
      <main>
        <div className='card-container'>
          {
            data.map((item, index) => {
              return (
                <Card
                  key={index}
                  nome={item.nome}
                  image={item.image}
                  link={item.link}
                />
              )
            })
          }
        </div>
      </main>
      <Footer />

    </div>
  );
}

export default App;
