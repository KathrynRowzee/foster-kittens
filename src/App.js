import LitterMenu from "./litter menu/LitterMenu";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from '@apollo/client'; 

function App() {
  const litterName = 'Test Litter 3/1/2023'
  return (
      <div className="App">
        <LitterMenu litterName={litterName}/>
      </div>
  );
}

{/* <ApolloProvider client={client}>
      <div className="App">
        <LitterMenu litterName={litterName}/>
      </div>
    </ApolloProvider><ApolloProvider client={client}>
      <div className="App">
        <LitterMenu litterName={litterName}/>
      </div>
    </ApolloProvider> */}

export default App;
