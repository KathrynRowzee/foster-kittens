import LitterMenu from "./litter menu/LitterMenu"; 

function App() {
  const litterName = 'Kittens!'
  return (
    <div className="App">
      <LitterMenu litterName={litterName}/>
    </div>
  );
}

export default App;
