import Navbar from '@/components/navbars/navbar'
import '../../styles/main.css'
import Header from '@/components/header.js/header'

export default function LayoutStudent({ children }){
  return (
    <>
      <Header/>
      <Navbar/>
      {children}        
    </>
  )
}
