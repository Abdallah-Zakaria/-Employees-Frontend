import { useState } from 'react';

import { If, Then } from 'react-if';

import Header from "./Header";
import DataTable from "./DataTable";
import Footer from "./Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header setLoaded={setLoaded} loaded={loaded} />
      <If condition={loaded}>
        <Then>
          <DataTable />
        </Then>
      </If>
      <Footer />
    </div>
  );
}

export default App;
