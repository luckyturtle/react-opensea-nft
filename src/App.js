import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name="CP Punks"
        traits={[{ value: 8 }]}
        image="https://gateway.thirdweb.dev/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg"
      />
    </div>
  );
}

export default App;
