import styled from 'styled-components';

export const NavbarLayout = styled.nav`
	position: fixed;
	width: 100vw;
	height: 64px;
	padding: 0 66px;
	box-shadow: 0 0 5px grey;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: var(--primary-color-light);
	z-index: 10;

	@media (max-width: 900px) {
		padding: 0;
		gap: 25px;
	}

	@media (max-width: 600px) {
		justify-content: center;
	}
`;

export const NavbarLeftside = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;
	user-select: none;
	font-size: 20px;

	img {
		width: 50px;
		height: 50px;
	}

	@media (max-width: 900px) {
		margin-left: 20px;
	}
`;

export const NavbarLogo = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 30px;
	border: 1px solid var(--primary-color-dark);
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export const NavbarRightside = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 35px;

	.child_link {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 5px;
		cursor: pointer;
		transition: all 0.3s linear;
		transform-origin: center;
	}

	@media (max-width: 900px) {
		margin-right: 20px;
	}

	@media (max-width: 600px) {
		display: none;
	}
`;

export const NavLinkContainer = styled.div`
	height: 100%;
	width: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const NavLinkBox = styled.div`
	position: relative;
	padding: ${({ active }) => (active ? '4px 10px' : '8px 15px')};
	border: 1px solid var(--primary-color-dark);
	border-radius: 3px;
	transition: padding 0.3s linear;

	::before {
		content: '';
		position: absolute;
		background: var(--primary-color-light);
		height: 1px;
		width: 20px;
		top: -1px;
		left: ${({ active }) => (!active ? '5px' : '30%')};
		transition: left 0.3s linear;
	}

	::after {
		content: '';
		position: absolute;
		background: var(--primary-color-light);
		height: 1px;
		width: 20px;
		bottom: -1px;
		right: ${({ active }) => (!active ? '5px' : '30%')};
		transition: right 0.4s linear;
	}

	:hover {
		padding: 4px 10px;

		::before {
			left: 30%;
		}
		
		::after {
			right: 30%;
		}
	}
`;
