import { Provider } from 'react-redux';
import Body from './Components/Body';
import appstore from "./utils/appstore";
import './index.css'; // Make sure this file exists



function App() {
  return (
    <Provider store={appstore}>
      <Body />
    </Provider>
  );
}

export default App;