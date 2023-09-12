import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    useParams
  } from "react-router-dom";
type TParams = { id: number };
function Index() {
  return <h2>Home</h2>;
}
const ProductView:React.FC = ():JSX.Element=> {
    const params = useParams()
  return <h2>This is a page for product with ID: {params.id}</h2>;
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="expenses" element={<ProductView />} />
      <Route path="invoices" element={<ProductView />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
