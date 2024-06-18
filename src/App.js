import { useState } from 'react';
import './App.css';
import MyEditor from './Components/MyEditor';

function App() {

  const [editorContent, setEditorContent] = useState('');
  const handleGetEditorContent = () =>{
    console.log('Editor Content: ', editorContent)
  } 

  return (
    <div className="App">
      <h2>Text Editor Like Facebook</h2>
      <MyEditor onEditorContentChange={setEditorContent} />
      <div className='get__editor__content__btn'>
        <button onClick={handleGetEditorContent}>Get Editor Content In Console</button>
      </div>
    </div>
  );
}

export default App;
