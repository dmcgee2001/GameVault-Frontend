import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  const myStyle = {
    // backgroundImage: "url('https://wallpapercave.com/wp/wp7113894.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  };
  return (
    <div style={myStyle}>
      <BrowserRouter>
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
