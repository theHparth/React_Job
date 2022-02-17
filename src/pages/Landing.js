import main from '../asserts/images/main.svg'
import Wrapper from '../asserts/wrappers/LandingPage'
import {Logo} from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
     <nav>
      <Logo />
     </nav>

     <div className='container page'>
        <div className='info'>
            <h1>
                job <span> tracking </span> app
            </h1>
            <p>dasdas das das d asdnklasd asd jaskdjasjd sa djasdajsdkjas djas dkjas djkas djkas djk asjkd akjs djaks djkas fjas fja fjak fjabvkjvnjdvnld vda vjladnv jl lkjblj bjldb jlsdbv vmsd vjlsdbvlsdjbvsd vdslvdsbvl dsvdsv dsvl dsjvb</p>
        </div>
        <Link to='/register' className='btn btn-hero'>
           Login / Register
        </Link>
        {/* <button className='btn btn-hero'> Login/Register </button> */}
     </div>

    <img src={main} alt='job hunt' className='img main-img'/>

    </Wrapper>
  )
}

export default Landing
