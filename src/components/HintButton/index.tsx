import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Button, Popover } from "@mui/material";
import { UserList } from '../UserList';
import { StyledContainerHintButton } from "./styles";
import { useState } from "react";

interface User {
  id: number;
  name: string;
  avatarUrl: string;
}

interface HintButtonProps {
  users: User[];
  onSelectUser: (user: User) => void;
}

export function HintButton({ users, onSelectUser }: HintButtonProps) {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

	const handleClose = () => {
    setAnchorEl(null);
  };

	const open = Boolean(anchorEl);
  const id = open ? 'user-list-popover' : undefined;

  return (
    <>
			<Button aria-describedby={id} onClick={handleClick} sx={{ padding: '0', minWidth: '0' }}>
				<StyledContainerHintButton icon={faPaperPlane} />
      </Button>
      <Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'center',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
        <UserList users={users} onSelect={onSelectUser} />
      </Popover>
    </>
  );
}