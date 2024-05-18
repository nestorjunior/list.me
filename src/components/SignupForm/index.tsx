import React, { FormEvent, useState } from 'react';
import { Modal } from '../Modal/index';

import { 
	SignupFormContainer,
	SignupFormStyled,
	StyledTermsLink
} from './styles'

export function SignupForm() {
	const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = () => {
		setOpenModal(true)
	};

	const handleCloseModal = () => {
		setOpenModal(false)
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
				<div className="col-sm-4">
					<SignupFormStyled className="card mb-4">
						<div className="card-header">Signup</div>
						<div className="card-body">
							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label className="small mb-1">Email</label>
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

								<div className="mb-3">
									<label className="small mb-1">Password</label>
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

								<div className="mb-3">
									<label className="small mb-1">Confirm password</label>
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

								<div className="mb-3">
									<input 
										type="checkbox" 
										className="form-check-input" 
										id="termsCheckbox" 
										checked={agreeToTerms}
										onChange={(e) => setAgreeToTerms(e.target.checked)}
										required 
									/>
									<label className="form-check-label" htmlFor="termsCheckbox" style={{ marginLeft: '5px' }}> I agree to the <StyledTermsLink onClick={handleOpenModal}>Terms of Service.</StyledTermsLink></label>
								</div>
								
								{error && <div className="error-message">{error}</div>}

								<PrimaryButton>Submit</PrimaryButton>
							</form>
						</div>
					</SignupFormStyled>
				</div>

			</SignupFormContainer>
			
			<Modal isOpen={openModal} onClose={handleCloseModal}>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque dui nibh, nec dapibus odio consectetur non. Vestibulum in odio sit amet nibh vestibulum facilisis eu nec nisl. Nullam rhoncus libero dui, a interdum augue vehicula ut. Etiam rutrum, libero quis sodales aliquet, ipsum purus lacinia magna, id consectetur lacus massa et urna. Curabitur sit amet rutrum dolor. Quisque aliquam erat in ligula tempor tincidunt ut at dui. Mauris sollicitudin magna at quam imperdiet posuere. Aliquam quis lacus sed eros convallis efficitur. Integer id turpis bibendum, sagittis felis et, egestas nunc. Nunc hendrerit elit id libero porttitor, nec efficitur urna congue.</p>
				<p>Integer convallis eget leo eu maximus. Maecenas et lorem ex. Aliquam vehicula, orci vitae luctus commodo, risus est molestie nibh, vel faucibus est felis nec arcu. Duis dignissim sit amet libero et facilisis. Integer eget dolor quis lectus commodo rutrum. Vivamus dapibus, libero eget rhoncus mattis, augue nulla rhoncus ante, ac tincidunt purus leo vel dolor. Mauris mollis ante eu rutrum dictum. Maecenas dignissim neque quis lacus pretium consequat. Nullam non metus massa. Cras sollicitudin, est ac euismod egestas, orci ipsum ultrices mi, rutrum iaculis sem mi eget magna. Ut non est odio.</p>
				<p>Nulla et augue id lectus viverra pretium ut quis dolor. Nullam vitae accumsan justo, interdum mollis arcu. Cras non lacus massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut gravida, odio eget accumsan pellentesque, sem nibh ultrices metus, ut sollicitudin diam justo et lorem. Suspendisse tristique risus quis molestie dapibus. Maecenas tempor in odio at eleifend. Aliquam tristique rhoncus urna. Aliquam laoreet ante et est bibendum pellentesque. Duis porttitor purus non massa sodales ultrices</p>
			</Modal>

		</>
	)
}
