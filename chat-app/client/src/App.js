import './App.css';
import Container from './components/Container';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <div>
      <ChatProvider>
        <Container />
      </ChatProvider>
    </div>
  );
}

export default App;
