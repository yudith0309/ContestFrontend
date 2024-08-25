import FooterEvaluator from '@/components/footers/footerEvaluator';
import '../../styles/main.css'
import NavBarEvaluator from '@/components/navbars/navbarEvaluator';

export default function LayoutEvaluator({ children }){
  return (
    <> 
    <NavBarEvaluator/>    
      {Children}
     <FooterEvaluator/>
    </>
  )
}
