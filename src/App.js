import './App.css';
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Section id='sec-01'
      heading='SPOTIFY PREMIUM'
      sub='Get 3 months of Premium for free'
      quote='Enjoy ad-free music, offline listening, and more. Cancel anytime.'
      color='btn-black'
      button='GET 3 MONTHS FREE'
      />
      <Section id='sec-02'
      heading='2020 WRAPPED'
      sub='See how you listened'
      quote='Find out the artists, songs, and podcasts that got you through the longest year ever.'
      color='btn-white'
      button='EXPLORE YOUR WRAPPED'
      />
      <Section id='sec-03'
      heading='SPOTIFY FREE'
      sub='Listening is everything'
      quote='Millions of songs and podcasts. No credit card needed.'
      color='btn-green'
      button='GET SPOTIFY FREE'
      />
      <Footer/>
    </div>
  );
}

export default App;
