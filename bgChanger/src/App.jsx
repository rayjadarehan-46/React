import { useState } from "react"

function App() {
  const [color , setColor] = useState("black")

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-24  inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center shadow-lg gap-3 px-3 py-2 rounded-2xl bg-white">
          <button className="outline-none text-black px-4 py-1 shadow-2xl rounded-full"
          style={{backgroundColor : "red " }}
           onClick={() =>{setColor("red")}}>
            red
          </button>
          <button className="outline-none text-black px-4 py-1 shadow-2xl rounded-full"
          style={{backgroundColor : "lavender " }}
           onClick={() =>{setColor("lavender")}}>
            lavender
          </button>
          <button className="outline-none text-black px-4 py-1 shadow-2xl rounded-full"
          style={{backgroundColor : "olive" }}
           onClick={() =>{setColor("olive")}}>
            olive
          </button>
          <button className="outline-none text-black px-4 py-1 shadow-2xl rounded-full"
          style={{backgroundColor : "blue " }}
           onClick={() =>{setColor("blue")}}>
            blue
          </button>
          <button className="outline-none text-blacl px-4 py-1 shadow-2xl rounded-full"
          style={{backgroundColor : "yellow " }}
           onClick={() =>{setColor("yellow")}}>
            yellow
          </button>
          <button className="outline-none text-black px-4 py-1 shadow-2xl rounded-full"
          style={{backgroundColor : "orange " }}
           onClick={() =>{setColor("orange")}}>
            orange
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
