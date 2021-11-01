import './App.css';
import Header from './Components/UI/Header'
import CharacterGrid from './Components/UI/Characters/CharacterGrid';
import Search from './Components/UI/Search';
import {useState, useEffect} from 'react' 
import axios from 'axios'

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  const getQuery = function(q){
    setQuery(q)
    console.log(q)
  }

  useEffect(()=>{
    const fetchitems = async ()=>{
    const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    console.log(result.data)
    setItems(result.data)
    setIsLoading(false)
  }
  fetchitems()

},[query])

  return (
    <div className="Container">
      <Header/>
      <Search getQuery={getQuery}/>
      <CharacterGrid isLoading = {isLoading} items={items}/>
    </div>
  );
}

export default App;
