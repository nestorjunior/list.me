import './styles';
import {
	ProfileFormContainer,
	ProfileFormImageStyled,
	ProfileFormAccountStyled,
	ProfileCardImage,
	ProfileCardButton
} from './styles'

export function ProfileForm() {
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

								<ProfileCardButton type="button" className="btn me-1">Upload new image</ProfileCardButton>
							</div>
						</ProfileFormImageStyled>
					</div>
					<div className="col-xl-8">

						<ProfileFormAccountStyled className="card mb-4">
							<div className="card-header">Account Details</div>
							<div className="card-body">
								<form>

									<div className="mb-3">
										<label className="small mb-1">Username (how your name will appear to other users on the site)</label>
										<input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username" />
									</div>

									<div className="row gx-3 mb-3">

										<div className="col-md-6">
											<label className="small mb-1">First name</label>
											<input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="Valerie" />
										</div>

										<div className="col-md-6">
											<label className="small mb-1">Last name</label>
											<input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna" />
										</div>
									</div>

									<div className="row gx-3 mb-3">

										<div className="col-md-6">
											<label className="small mb-1">Organization name</label>
											<input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" value="Start Bootstrap" />
										</div>

										<div className="col-md-6">
											<label className="small mb-1">Location</label>
											<input className="form-control" id="inputLocation" type="text" placeholder="Enter your location" value="San Francisco, CA" />
										</div>
									</div>

									<div className="mb-3">
										<label className="small mb-1">Email address</label>
										<input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@example.com" />
									</div>

									<div className="row gx-3 mb-3">

										<div className="col-md-6">
											<label className="small mb-1">Phone number</label>
											<input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567" />
										</div>

										<div className="col-md-6">
											<label className="small mb-1">Birthday</label>
											<input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="06/10/1988" />
										</div>
									</div>

									<ProfileCardButton type="button" className="btn me-1">Save changes</ProfileCardButton>
								</form>
							</div>
						</ProfileFormAccountStyled>
					</div>

				</div>
			</ProfileFormContainer>
		</>
	)
}