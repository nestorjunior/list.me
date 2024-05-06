import React, { FormEvent, useState } from 'react';
import { ModalDefault } from '../ModalDefault/ModalDefault';
import './styles';

import { 
	SignupFormContainer,
	SignupFormStyled,
	SignupFormTitle,
	StyledSubmitButton,
	StyledBoxSubmitButton,
	StyledTermsLink
} from './styles'

export function SignupForm() {
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
			<SignupFormContainer>
				<SignupFormStyled onSubmit={handleSubmit}>
					<SignupFormTitle>Signup</SignupFormTitle>
					
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
						<label className="form-check-label" htmlFor="termsCheckbox">I agree to the <StyledTermsLink onClick={handleShowModal}>Terms of Service.</StyledTermsLink></label>
					</div>

					{error && <div className="error-message">{error}</div>}

					<StyledBoxSubmitButton>
						<StyledSubmitButton className='btn btn-primary' type="submit">
							Submit
						</StyledSubmitButton>
					</StyledBoxSubmitButton>
				</SignupFormStyled>
			</SignupFormContainer>

			{showModal && <ModalDefault onClose={handleCloseModal} />}
		</>
	)
}
