const Quotes = () => {
    return (
        <div id="quote-box">
              <p id="text">{quotes.quote}</p>
              <p id="author">-</p>
              <a href="https://x.com/home" id="tweet-quote" target="_top">
                Tweet
              </a>
              <button 
                id="new-quote" 
                type="button" 
                onClick={handleQuoteChoice}
                >New Quote
              </button>
            </div>
    )
}

export default Quotes