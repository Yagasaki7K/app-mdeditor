import { useState } from 'react'
import MDEditor from "@uiw/react-md-editor";
import './App.css'

function App() {
  const [value, setValue] = useState('# Hello World');
  const [theme, setTheme] = useState('light');

  return (
    <div className="App">
      <h2>Note Markdown</h2>

      <MDEditor height={200} value={value} onChange={setValue} data-color-mode={theme} />

      <small style={{ marginTop: '100px' }}>© 2022 - {new Date().getFullYear()} <a href="/">Note Markdown</a> - &nbsp;
        <a href="https://kalifyinc.vercel.app/" target="_blank" rel="noreferrer">Kalify Inc.</a></small>

      <div className="theme" style={{ marginTop: '20px' }}>
        <button onClick={() => setTheme('light')} style={{ marginRight: "20px" }}>🌕</button>
        <button onClick={() => setTheme('dark')}>🌑</button>
      </div>
    </div>
  )
}

export default App
