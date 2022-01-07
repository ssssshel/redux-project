import {Provider} from 'react-redux'
import generateStore from './redux/store';

import Pokemones from './components/Pokemones';


function App() {

  const store = generateStore()

  return (
    <Provider store={store} >
      <Pokemones />
    </Provider>
  );
}

export default App;
