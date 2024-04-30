import { Modal, Button } from "react-bootstrap";
import './ModalDefault.scss'

interface ModalDefaultProps {
	onClose: () => void;
}

export function ModalDefault({onClose}: ModalDefaultProps) {

	return(
		<>
			<Modal show={true} onHide={onClose} className="wb-modal-signup">
				<Modal.Header closeButton>
					<Modal.Title>Terms of Service</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae vestibulum molestie. Integer et hendrerit urna. Praesent interdum quam eu nulla ultricies, ut fringilla nunc interdum. Mauris ac est in lectus molestie ultrices. Ut sit amet nulla eu libero dapibus fermentum nec nec nunc. Mauris pharetra eros vel risus dignissim, nec bibendum elit auctor. Nullam euismod arcu id odio maximus, quis tempus tellus vehicula. Nulla facilisi. Proin dictum nec libero at posuere. Nulla facilisi. Integer ultricies velit nec libero fermentum volutpat. Cras rhoncus, ex et placerat gravida, arcu neque tempor mi, non eleifend nulla tortor ac nisi. Phasellus feugiat neque at purus ultricies, eu sollicitudin nisl luctus. Donec fermentum metus vel nisi tempor bibendum.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={onClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}