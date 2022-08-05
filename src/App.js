import Card from './components/quoteCard';
import NextButton from './components/nextButton';
import FooterContent from './components/footerContent.js';
import {useState} from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [quoteContent, setQuoteContent] = useState("Loading...")

  const fetchText = () => {
    setIsLoading(true);
    fetch('https://v1.hitokoto.cn/')
      .then((response) => response.json())
      .then((result) => {
        console.log("Loading result");
        setQuoteContent(result)
      })
      .catch(console.error)
  }
  return (
    <div className="App">
      <Card value={quoteContent} isLoading={isLoading}/>
      <NextButton onClick={fetchText} />
      <FooterContent />
    </div>
  );
}

export default App;
