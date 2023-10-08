import styled from "styled-components";
import { MouseEventHandler } from "react";

const MenuToggleContainer = styled.button`
  position: absolute;
  left: 0.5rem;
  color: var(--fg-color);
  font-size: 2rem;
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 2;
  transition: color 0.5s ease-in-out;

  &[data-open] {
    color: var(--nav-fg-color);
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const MenuToggle = ({ open, toggleOpen }: { open: boolean; toggleOpen: () => void }) => {
  return (
    <MenuToggleContainer data-open={open || undefined} onClick={toggleOpen}>
      ☰
    </MenuToggleContainer>
  );
};

export default MenuToggle;
