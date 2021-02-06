import './App.css';
import Address from "./components/profile/adress/Address";
import FullName from "./components/profile/FullName/FullName";
import ProfilPhoto from "./components/profile/ProfilPhoto/ProfilPhoto";

function App() {
  return (
    <div className="App">
     <ProfilPhoto/>
     <FullName/>
     <Address/>

{/*I'll improve my design in props ^_^ */}
    </div>
  );
}

export default App;
