import UserContextProvider from './context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'
import './App.css'
function App() {
  
  return (
    <>

    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
    </>
  )
}

export default App
