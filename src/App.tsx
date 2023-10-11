import { useEffect, useState } from 'react'
import './App.css'
import { TestingService } from './services/testing.service'

function App() {
  const [morty, setMorty] = useState({});

  const fetchMorty = async () => {
    try {
      const { data } = await TestingService();
      setMorty(data);
  
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchMorty();
  }, [])

  return (
    <>
      json: {JSON.stringify(morty)}
    </>
  )
}

export default App
