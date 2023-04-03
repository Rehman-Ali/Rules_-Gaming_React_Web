import React from "react"
import { Route, Routes } from "react-router-dom"
import ClashOfChampions from "../pages/clashOfChampions/ClashOfChampions"
import HomePage from "../pages/homepage/HomePage"
import KingsOfRngs from "../pages/kingsOfRings/KingsOfRngs"
import Rules from "../pages/Rules"
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/kingsofrings" element={<KingsOfRngs />} />
      <Route path="/clashofchampions" element={<ClashOfChampions />} />
    </Routes>
  )
}

export default Routing
