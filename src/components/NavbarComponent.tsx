import './NavbarComponent.scss'
import { Navbar, Container, Nav } from 'react-bootstrap'

export function NavbarComponent() {
  return(
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand me-2" href="#">Wishorama®</a>
          <form className="d-flex align-items-center flex-grow-1">
            <input className="form-control me-2 flex-grow-1" type="search" placeholder="Search your list" aria-label="Search your list" />
          </form>
          <div>
            <a className="btn btn-primary mx-1" href="#">Login</a>
            <a className="btn btn-primary mx-1" href="#">Create account</a>
          </div>
        </div>
      </nav>
    </>
  )
}