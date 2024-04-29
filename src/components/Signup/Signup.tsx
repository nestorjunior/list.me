import { OverlayTrigger, Tooltip } from "react-bootstrap"

export function Signup() {
	return(
		<>	
			 <div className="d-flex justify-content-center align-items-center vh-100 login-wb">
				<form className="w-50">
					<h2 style={{marginBottom: '15px'}}>Signup</h2>
					<div className="formNameUser">
						<label className='form-label'>Name</label>
						<input
							className='form-control'
							type="text"
							placeholder="Name"
							required
							style={{marginBottom: '15px'}}
						/>
					</div>

					<div className="formMailUser">
						<label className='form-label'>E-mail</label>
						<input
							className='form-control'
							type="mail"
							placeholder="E-mail"
							required
							style={{marginBottom: '15px'}}
						/>
					</div>

					<div className="formBirthdayUser">
						<OverlayTrigger
							placement="right"
							overlay={<Tooltip>Just observation</Tooltip>}
						>
							<label className='form-label'>Day and month of your birthday</label>
						</OverlayTrigger>
						<input
							className='form-control'
							type="date"
							placeholder="Digite o dia e mês do seu aniversário"
							required
							style={{marginBottom: '15px'}}
						/>
					</div>

					<div className="box-button-bw">
						<button className='btn btn-primary' type="submit">
							Enviar
						</button>
					</div>
				</form>
			</div>
		</>
	)
}