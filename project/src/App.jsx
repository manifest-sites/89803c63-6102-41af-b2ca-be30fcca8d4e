import { useState } from 'react'
import Monetization from './components/monetization/Monetization'
import { logout } from './utils/auth'

function App() {
  const [clickCount, setClickCount] = useState(0)

  const handleFrogClick = () => {
    setClickCount(prev => prev + 1)
  }

  return (
    <Monetization>
      <div className="min-h-screen bg-gradient-to-br from-green-200 via-blue-200 to-purple-300 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Fun background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-pink-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 bg-green-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 bg-blue-300 rounded-full animate-bounce"></div>
        </div>

        {/* Logout button */}
        <button 
          onClick={logout}
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-lg"
        >
          Logout
        </button>

        {/* Main content */}
        <div className="text-center z-10">
          <div 
            className="text-9xl cursor-pointer hover:scale-110 transition-transform duration-200 select-none mb-8 drop-shadow-2xl"
            onClick={handleFrogClick}
          >
            🐸
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-xl">
            <p className="text-2xl font-bold text-gray-800">
              Clicks: {clickCount}
            </p>
          </div>
        </div>
      </div>
    </Monetization>
  )
}

export default App