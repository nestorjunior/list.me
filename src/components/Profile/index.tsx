import React, {FormEvent} from 'react';
import { Button } from '@mui/material';
import './styles';
import {
	ProfileFormContainer,
	ProfileFormImageStyled,
	ProfileFormAccountStyled,
	ProfileCardImage,
} from './styles'

export function Profile() {

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit')
  };

	return (
		<>
			<ProfileFormContainer className="container-fluid px-4 mt-4">
				<div className="row">
					<div className="col-xl-4">

						<ProfileFormImageStyled className="card mb-4 mb-xl-0">
							<div className="card-header">Profile Picture</div>
							<div className="card-body text-center">
								<ProfileCardImage src="https://i.pravatar.cc/150" className="img-fluid" alt="" />
								<div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>

								<Button color='error' variant="contained">
									Upload new image
								</Button>
							</div>
						</ProfileFormImageStyled>
					</div>
					<div className="col-xl-8">

						<ProfileFormAccountStyled className="card mb-4">
							<div className="card-header">Account Details</div>
							<div className="card-body">
								<form onSubmit={handleSubmit}>

									<div className="mb-3">
										<label className="small mb-1">Username (how your name will appear to other users on the site)</label>
										<input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" />
									</div>

									<div className="row gx-3 mb-3">

										<div className="col-md-6">
											<label className="small mb-1">First name</label>
											<input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" />
										</div>

										<div className="col-md-6">
											<label className="small mb-1">Last name</label>
											<input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
										</div>
									</div>

									<div className="row gx-3 mb-3">

										<div className="col-md-6">
											<label className="small mb-1">Organization name</label>
											<input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" />
										</div>

										<div className="col-md-6">
											<label className="small mb-1">Location</label>
											<input className="form-control" id="inputLocation" type="text" placeholder="Enter your location" />
										</div>
									</div>

									<div className="mb-3">
										<label className="small mb-1">Email address</label>
										<input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" />
									</div>

									<div className="row gx-3 mb-3">

										<div className="col-md-6">
											<label className="small mb-1">Phone number</label>
											<input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" />
										</div>

										<div className="col-md-6">
											<label className="small mb-1">Birthday</label>
											<input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" />
										</div>
									</div>

									<Button color='error' variant="contained" type='submit'>
										Submit
									</Button>
								</form>
							</div>
						</ProfileFormAccountStyled>
					</div>
				</div>
			</ProfileFormContainer>
		</>
	)
}