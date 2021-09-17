import Header from "./Header";
import DataTable from "./DataTable";
import Footer from "./Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <DataTable />
      <Footer />
    </div>
  );
}

export default App;
