import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyEditor from './Components/MyEditor';
import formatContent from './utility/formatContent';


function App() {

  const [editorContent, setEditorContent] = useState('');
  const [postContent, setPostContent] = useState("");

  const handleGetEditorContent = () => {
    console.log('Editor Content: ', editorContent)
  }

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  }
  const handlePostSubmit = () => {
    const formattedPostContent = formatContent(postContent);
    console.log("Post content:", formattedPostContent);
  }

  return (
    <div className="App">

      {/* Using Editor */}
      <h2>Text Editor Like Facebook</h2>
      <MyEditor onEditorContentChange={setEditorContent} />
      <div className='get__editor__content__btn'>
        <button onClick={handleGetEditorContent}>Get Editor Content In Console</button>
      </div>
      <br />
      <br />

      {/* Simple boostrap textarea */}
      <h2>Simple Boostrap Text Editor</h2>
      <div className='d-flex justify-content-center'>

        <textarea
          className="form-control mb-2 w-50"
          rows="6"
          placeholder='What do you want to talk about?'
          value={postContent}
          onChange={handlePostChange} />
      </div>

      <div className='get__editor__content__btn'>
        <button disabled={!postContent} onClick={handlePostSubmit}>Get Content In Console</button>
      </div>

    </div>
  );
}

export default App;
