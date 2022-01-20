import './App.css';
import UploadForm from './components/UploadForm';
import Templates from './components/Templates';
import { useState, useEffect } from 'react';

function App() {
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((meme) => setMeme(meme));
  },[]);
  console.log(meme);
  return (
    <div className="App">
      <UploadForm />
      <Templates {...meme}/>
      <p>Made with 💙 by Garvit</p>
    </div>
  );
}

export default App;
