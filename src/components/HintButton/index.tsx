import React, { useState } from "react";
import { Popover } from "@mui/material";
import { UserList } from '../UserList';
import { StyledHintIcon, StyledFontAwesomeIcon } from "./styles";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'user-list-popover' : undefined;

  return (
    <>
      <StyledHintIcon aria-describedby={id} onClick={handleClick}>
        <StyledFontAwesomeIcon icon={faPaperPlane} />
      </StyledHintIcon>
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
