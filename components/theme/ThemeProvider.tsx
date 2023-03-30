import {
  useContext,
  createContext,
  useState,
} from 'react'

const ThemeContext = createContext<{
  useInitialColorScheme: boolean
  setUseInitialColorScheme: (value: boolean) => void
}>({ useInitialColorScheme: false, setUseInitialColorScheme: () => null })

export const ThemeProvider = ({ children }: { children: any }) => {
  const [useInitialColorScheme, setUseInitialColorScheme] = useState(true)

  return (
    <ThemeContext.Provider
      value={{
        useInitialColorScheme,
        setUseInitialColorScheme: (value: boolean) => {
          setUseInitialColorScheme(value)
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
