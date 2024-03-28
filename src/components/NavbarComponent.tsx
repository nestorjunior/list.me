import { ButtonComponent } from './ButtonComponent'
import { SearchComponent } from './SearchComponent'
import { LogoComponent } from './LogoComponent'

import './NavbarComponent.scss'

export function NavbarComponent() {
  return(
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand me-2" href="#">
            <LogoComponent />
          </a>
          <SearchComponent />
          <div>
            <ButtonComponent />
            <ButtonComponent />
          </div>
        </div>
      </nav>
    </>
  )
}