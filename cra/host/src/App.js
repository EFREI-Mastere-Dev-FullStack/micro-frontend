import React from 'react';

const RemoteButton = React.lazy(() => import('remote/Button'));
import Header from '../../sharedComponents/headers/header';
import Footer from "../../sharedComponents/footers/footer";
import ToggleText from "./ToggleText";
import Pokemon from "./pokemon";

const App = () => (
  <div>
    <Header />
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <Pokemon />
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>

      <ToggleText title="Foobar" />
    <Footer />
  </div>
);

export default App;
