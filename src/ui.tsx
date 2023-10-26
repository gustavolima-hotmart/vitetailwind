import { useState, useEffect } from "react"

const UI = () => {

  const [isDark, setIsDark] = useState<boolean>(() => {
    const theme = localStorage.getItem('theme')

    if(!theme) return false

    return theme === 'dark' || false
  })

  useEffect(() => {
    if(isDark) {
      return document.documentElement.classList.add('dark')
    }
    document.documentElement.classList.remove('dark')
  }, [isDark])

  const handleClick = () => {
    setIsDark(isDarkTheme => {
      localStorage.setItem('theme', isDarkTheme ? 'light' : 'dark')
      return !isDarkTheme
    })
  }


  const handleChange = () => void 0

  return (
    <div>
      <div className="flex flex-row align-baseline">
        <input type="radio" id="theme" onChange={handleChange} checked={isDark} onClick={handleClick}/> <label htmlFor="theme">Dark</label>
      </div>
      <div className="max-w-md mx-auto bg-primary-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Event"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-andromeda-400 font-semibold">
            Event Name
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-primary-600">
            Event Description
          </p>
          <p className="mt-2 text-gray-500">Event Details...</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UI
