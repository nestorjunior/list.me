import './SearchComponent.scss'

export function SearchComponent() {
  return(
    <form className="d-flex align-items-center flex-grow-1">
      <input className="form-control me-2 flex-grow-1 centered-placeholder search-wishorama" type="search" placeholder="Search your list" aria-label="Search your list" />
    </form>
  )
}