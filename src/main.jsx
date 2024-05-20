import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { EmojisDataProvider } from './context/emojisData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <EmojisDataProvider>
    <App />
  </EmojisDataProvider>,
)
