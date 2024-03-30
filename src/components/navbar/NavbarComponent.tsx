import { ButtonComponent } from '../button/ButtonComponent'
import { SearchComponent } from '../search/SearchComponent'
import { LogoComponent } from '../logo/LogoComponent'

import './NavbarComponent.scss'
import { CiUser } from "react-icons/ci";


export function NavbarComponent() {
  return(
    <>
      <nav className="navbar navbar-wishorama bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand me-2" href="#">
            <LogoComponent />
          </a>
          <SearchComponent />
          <div>
            <CiUser size={34} />
            <ButtonComponent />
          </div>
        </div>
      </nav>
    </>
  )
}