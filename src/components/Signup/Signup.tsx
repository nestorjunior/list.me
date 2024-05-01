import React, { FormEvent, useState } from 'react';
import { ModalDefault } from '../ModalDefault/ModalDefault';
import './Signup.scss';

export function Signup() {
	const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => {
		setShowModal(true)
	};

	const handleCloseModal = () => {
		setShowModal(false)
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!validateEmail(email)) {
			setError('Invalid email');
			return;
		}

		if (!validatePassword(password)) {
			setError('Password must be at least 6 characters long');
			return;
		}

		if (password !== confirmPassword) {
			console.log('Passwords do not match');
      return;
		}

		if (!agreeToTerms) {
			console.log('You must agree to the terms');
			return;
		}

	};

	const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

	const validatePassword = (password: string): boolean => {
		return password.length >= 6;
	}

	return (
		<>
			<div className="d-flex justify-content-center align-items-center vh-100 signup-wb">
				<form onSubmit={handleSubmit} className="w-50">
					<h2 style={{ marginBottom: '15px' }}>Signup</h2>
					
					<div className="formMailUser">
						<label className='form-label'>Email</label>
						<input
							className='form-control'
							type="email"
							value={email}
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
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
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							style={{ marginBottom: '15px' }}
						/>
					</div>

					<div className="formConfirmPasswordUser">
						<label className='form-label'>Confirm password</label>
						<input
							className='form-control'
							type="password"
							placeholder="Confirm password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
							style={{ marginBottom: '15px' }}
						/>
					</div>

					<div className="form-check">
						<input 
							type="checkbox" 
							className="form-check-input" 
							id="termsCheckbox" 
							checked={agreeToTerms}
							onChange={(e) => setAgreeToTerms(e.target.checked)}
							required 
						/>
						<label className="form-check-label" htmlFor="termsCheckbox">I agree to the <a onClick={handleShowModal}>Terms of Service.</a></label>
					</div>

					{error && <div className="error-message">{error}</div>}

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
