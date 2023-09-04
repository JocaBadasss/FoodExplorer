import { useEffect, useState } from "react"

const UseWidthHook = () => {
  const [WidthScreen, setWindowWidth] = useState(window.innerWidth)
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, [WidthScreen])
  return WidthScreen
}

export default UseWidthHook
