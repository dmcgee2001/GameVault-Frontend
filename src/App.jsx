import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
