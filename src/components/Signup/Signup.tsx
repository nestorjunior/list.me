
export function Signup() {
	return(
		<>	
			 <div className="d-flex justify-content-center align-items-center vh-100 login-wb">
				<form className="w-50">
					<h2 style={{marginBottom: '15px'}}>Signup</h2>
					<div className="formFullName">
						<label className='form-label'>Nome Completo</label>
						<input
							className='form-control'
							type="text"
							placeholder="Digite seu nome completo"
							required
							style={{marginBottom: '15px'}}
						/>
					</div>

					<div className="formMailUser">
						<label className='form-label'>E-mail</label>
						<input
							className='form-control'
							type="mail"
							placeholder="Digite seu e-mail"
							required
							style={{marginBottom: '15px'}}
						/>
					</div>

					<div className="formFullName">
						<label className='form-label'>Nome de Usuário</label>
						<input
							className='form-control'
							type="text"
							placeholder="Digite um nome de usuário"
							required
							style={{marginBottom: '15px'}}
						/>
					</div>

					<div className="formFullName">
						<label className='form-label'>Dia e mês do seu aniversário</label>
						<input
							className='form-control'
							type="text"
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