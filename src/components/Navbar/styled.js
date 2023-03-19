import styled from 'styled-components';

export const NavbarLayout = styled.nav`
	position: fixed;
	width: 100%;
	height: 64px;
	padding: 0 66px;
	box-shadow: 0 0 5px grey;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: white;
	z-index: 10;
`;

export const NavbarLeftside = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;

	img {
		width: 50px;
		height: 50px;
	}
`;

export const NavbarLogo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  border: 1px solid black;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavbarRightside = styled.div`
height: 100%;
  display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 35px;
  
  .right_child {
		height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
		cursor: pointer;
  }

	@media (max-width: 550px) {
		display	: none;
	}
`