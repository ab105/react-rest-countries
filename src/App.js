import './App.css';
import Countries from './Components/Countries';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}






































//component
/* 
function Countries(){
  const[countries, setCountries] = useState([]);
  
  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json()) //response jeta pabo shetake json convert korsi
      .then(data => setCountries(data))//aikane setCountries a data dile useState er countries variable a jabe
  },[]);
  console.log(countries);
  return(
    <div>
      <h2>Travelling Around the world!!!!</h2>
      <h4>Countries Available: {countries.length}</h4>
      {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  );
}

function Country(props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Capital: {props.capital}</h2>
    </div>
  );
}
 */
export default App;
