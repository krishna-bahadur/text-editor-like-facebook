import { EditorState } from 'draft-js'
import { stateToHTML } from 'draft-js-export-html';
import React, { Component } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class MyEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({ editorState });

    const currentContent = editorState.getCurrentContent();
    
    // Getting html content
    const htmlContent = stateToHTML(currentContent)

    // Getting plain content
    const plainText = currentContent.getPlainText();

    this.props.onEditorContentChange(htmlContent);

  };


  render() {
    const { editorState } = this.state;

    return (
      <Editor
        editorState={editorState}
        toolbarHidden  //Hide the menu bars options
        placeholder="Type here..."
        wrapperClassName="wrapper__class"
        editorClassName="editor__class"
        onEditorStateChange={this.onEditorStateChange}
      />
    )
  }
}
