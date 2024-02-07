import LocalButton from './Button';
import Header from '../../sharedComponents/headers/header';
import Footer from "../../sharedComponents/footers/footer";
import SquareBuilder from "./SquareBuilder";
const App = () => (
  <div>
    <Header />
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
    <SquareBuilder numSquares={5} />
    <Footer />
  </div>
);

export default App;
