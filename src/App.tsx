import { useEffect } from "react"
import UI from "./ui"

const colors = {
  custom: "68, 35, 69",
  inverted: "0, 153, 255"
}

function App() {

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `:root {--hc-color-neutral-100: ${colors.custom}; --hc-color-andromeda-400: ${colors.inverted}};`
    // document.head.appendChild(style)
  }, [])

  return <UI />
}

export default App
