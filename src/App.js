import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Web3Utils from './Web3Utils';
import { Toaster } from 'react-hot-toast';

import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core';
import Homepage from './Homepage';
const getLibrary = (provider, connector) => new Web3Utils.Web3(provider);
const Web3ReactProviderPassive = createWeb3ReactRoot('passive');

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <div>
          <Toaster position="top-right" />
        </div>
        <Homepage></Homepage>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
