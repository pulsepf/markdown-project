import './App.css';
import React, { useState } from 'react';
import { marked } from 'marked';

function App() {
  const [markdown, setMarkdown] = useState(`# H1 Header
## H2 Subheader
[Link](https://www.example.com)
\`inline code\`
\`\`\`
Code Block
\`\`\`

- First Item
- Second Item
- Third Item

> blockquote
![Image](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
**Bolded Text**`);
  const [previewText, setPreviewText] = useState(marked(markdown));
  
  const handleTextareaChange = (event) => {
    const newMarkdown = event.target.value;
    const html = marked(newMarkdown);
    setMarkdown(newMarkdown);
    setPreviewText(html);
  }

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <textarea id="editor" onChange={handleTextareaChange} value={markdown}>

      </textarea>
      <div id="preview" dangerouslySetInnerHTML={{__html: previewText}}>
      </div>
    </div>
  );
}

export default App;
