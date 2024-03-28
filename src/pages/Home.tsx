import './Home.scss'
import { NavbarComponent } from '../components/NavbarComponent'
import { FooterComponent } from '../components/FooterComponent'
import { ItemComponent } from '../components/ItemComponent'

export function Home() {
  return(
    <>
      <div className='home d-flex flex-column vh-100'>
        <header>
          <NavbarComponent/>
        </header>
        <main className='flex-grow-1'>
          <ItemComponent />
        </main>
        <FooterComponent />
      </div>
      
    </>
  )
}