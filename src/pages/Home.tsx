import './Home.scss'
import { NavbarComponent } from '../components/navbar/NavbarComponent'
import { FooterComponent } from '../components/footer/FooterComponent'
import { ItemComponent } from '../components/item/ItemComponent'
import { NavbarComponentLogin } from '../components/navbar-login/NavbarComponentLogin'

export function Home() {
  return(
    <>
      <div className='home d-flex flex-column vh-100'>
      <NavbarComponentLogin />
			<div className="container">
        <header>
          <NavbarComponent/>
        </header>
        <main className='flex-grow-1'>
          <ItemComponent />
        </main>
      </div>
      <FooterComponent />
      </div>
      
    </>
  )
}