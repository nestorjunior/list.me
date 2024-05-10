import { ButtonStyled } from './style'

interface ButtonProps {
	type: "button" | "reset" | "submit";
	className?: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	children: string;
}

export function Button({type, className, onClick, children}:ButtonProps) {
	return(
		<>
			<ButtonStyled
				type={type || "button"}
				className={className ? `btn-component ${className}` : "btn"}
				onClick={onClick}
			>
				{children}
			</ButtonStyled>
		</>
	)
}