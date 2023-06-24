import { BrowserRouter, Route, Routes } from "react-router-dom";

function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detalle/:id" /> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  );
}
