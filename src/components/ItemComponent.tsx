import './ItemComponent.scss'

export function ItemComponent() {
  return(
    <div className="container d-flex justify-content-center vh-100">
      <div className="p-4">
        <div className="form-check mb-2 list-item-wishorama">
          <input className="form-check-input" type="checkbox" value="" id="checkbox1" />
          <label className="form-check-label" htmlFor="checkbox1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </label>
        </div>
        <div className="form-check mb-2 list-item-wishorama">
          <input className="form-check-input" type="checkbox" value="" id="checkbox2" />
          <label className="form-check-label" htmlFor="checkbox2">
            Depudiandae dolorum officiis possimus quisquam.
          </label>
        </div>
        <div className="form-check mb-2 list-item-wishorama">
          <input className="form-check-input" type="checkbox" value="" id="checkbox3" />
          <label className="form-check-label" htmlFor="checkbox3">
            Nobis nesciunt unde dolore ipsum modi earum!
          </label>
        </div>
      </div>
    </div>
  )
}