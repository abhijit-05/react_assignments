import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import UserList from './components/UserList/UserList'
import MainBody from './components/MainBody/MainBody'


function App() {
  
  return (
    <>
      <Header />
      {/* <UserList name={name} age={age} nationality={nationality} /> */}
      <UserList name="Abhi" age={30} nationality="Kerala" />
      <Footer />
    </>
  )
}

export default App
