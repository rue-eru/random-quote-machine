import { useState, useEffect } from 'react'
import './App.css'
import QuoteBox from './QuoteBox';
import Footer from './Footer';

const handleQuoteChoice = (arr) => {
  let quoteIndex = Math.floor(Math.random() * arr.length);
  return arr[quoteIndex]
};

function App() {
  const [quoteDisplayed, handleQuoteDisplayed] = useState({quotes: '', author: ''});
  const [randomColor, setColor] = useState('');
  const [fetchedQuotes, setFetchedQuotes] = useState(null);

  const apiURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

  const colorArray = [ '219ebc', 'cdb4db', '0a9396', '778da9', 'd62828', '8ac926', '6a4c93', '84a98c', 'b8c0ff', 'ffafcc', '708d81', '00a5cf']

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setFetchedQuotes(data);
      } catch (err) {
        console.log(err.stack)
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (fetchedQuotes) {
      setQuote()
    }
  }, [fetchedQuotes])

  const setQuote = () => {
    setColor(`#${handleQuoteChoice(colorArray)}`)
    let quotesData = fetchedQuotes.quotes
    handleQuoteDisplayed(handleQuoteChoice(quotesData))
  }

  return (
    <>
      <div 
      style={{ backgroundColor: `${randomColor}`, color: `${randomColor}`}}
      id='backgroundcolor'
      >
         <QuoteBox 
           quoteDisplayed={quoteDisplayed}
           randomColor={randomColor}
           setQuote={setQuote}
         />
      </div>
      <Footer />
    </>
  )
}

export default App