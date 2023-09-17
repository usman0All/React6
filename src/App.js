import { BrowserRouter } from "react-router-dom"
import RouteCompo from "./hd/RouteCompo";
function App() {
  return (
    <>
      <BrowserRouter>
        <RouteCompo />
      </BrowserRouter>
      </>
  );
}
export default App;