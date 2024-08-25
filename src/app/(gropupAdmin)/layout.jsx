import Navbar from '@/components/navbars/navbar'
import '../../styles/main.css'
import Header from '@/components/header.js/header'

export default function LayoutAdmin({ children }) {
  return (
    <>
     <Header/>
      <Navbar/>
      {children}
    </>
  )
}
