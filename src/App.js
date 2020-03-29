import React, {useState, useEffect} from "react";
import './index.css';
import {Meme} from "./components/Meme";

function App() {
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(x => x.json()
        .then(response => setTemplates(response.data.memes))
      );

  }, []);

  return (
    <div style={{textAlign: "center"}}>
      {/*Show the meme clicked*/}
      {template && <Meme template={template}/>}
      {/*  Meaning behind "!template &&". If they have not chosen a template show them all the options. */}
      {!template && (
        <>
          <h1>Pick a template</h1>
          {templates.map(template => {
            return (
              <Meme
                template={template}
                onClick={() => {
                  setTemplate(template);
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
}


  export default App;