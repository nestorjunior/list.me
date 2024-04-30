import { useState } from 'react';
import { ModalDefault } from '../ModalDefault/ModalDefault';
import './Signup.scss';

export function Signup() {

	const [showModal, setShowModal] = useState(false)

	const handleShowModal = () => {
		setShowModal(true)
	}

	const handleCloseModal = () => {
		setShowModal(false)
	}

	return (
		<>
			<div className="d-flex justify-content-center align-items-center vh-100 signup-wb">
				<form className="w-50">
					<h2 style={{ marginBottom: '15px' }}>Signup</h2>
					<div className="formMailUser">
						<label className='form-label'>E-mail</label>
						<input
							className='form-control'
							type="mail"
							placeholder="E-mail"
							required
							style={{ marginBottom: '15px' }}
						/>
					</div>

					<div className="formPasswordUser">
						<label className='form-label'>Password</label>
						<input
							className='form-control'
							type="password"
							placeholder="Password"
							required
							style={{ marginBottom: '15px' }}
						/>
					</div>

					<div className="formRepeatPasswordUser">
						<label className='form-label'>Repeat password</label>
						<input
							className='form-control'
							type="password"
							placeholder="Repeat password"
							required
							style={{ marginBottom: '15px' }}
						/>
					</div>

					<div className="form-check">
						<input type="checkbox" className="form-check-input" id="termsCheckbox" required />
						<label className="form-check-label" htmlFor="termsCheckbox">I agree to the <a onClick={handleShowModal}>Terms of Service.</a></label>
					</div>

					<div className="box-button-bw">
						<button className='btn btn-primary' type="submit">
							Submit
						</button>
					</div>
				</form>
			</div>
			
			{showModal && <ModalDefault onClose={handleCloseModal} />}

		</>
	)
}
