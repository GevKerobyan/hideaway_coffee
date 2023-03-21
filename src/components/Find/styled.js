import styled from 'styled-components';

export const FindSectionLayout = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 33px;
	padding: 66px;

	@media (max-width: 600px) {
		height: auto;
		margin-top: 50px;
		padding: 25px;
		padding-top: 0;
		gap: 25px;
	}
`;

export const FindSectionTitle = styled.p`
	font-size: 45px;
	user-select: none;
`;

export const FindSectionMap = styled.div`
	width: 100%;
	height: 400px;
	background: var(--primary-color-dark);
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 600px) {
		height: 300px;
	}
`;

export const FindSectionFooter = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 100px;

	@media (max-width: 1150px) {
		gap: 15px;
	}

	@media (max-width: 1000px) {
		flex-direction: column;
		gap: 15px;
	}
`;

export const FindSectionAddress = styled.div`
	height: auto;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 20px 0;

	p {
		width: 250px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 10px;
		font-size: 18px;
		font-weight: bold;
	}

	span {
		font-size: 14px;
		font-weight: 400;
	}
`;

export const FindSectionSchedule = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h2 {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	p {
		font-size: 14px;
		font-weight: 400;
		margin-bottom: 5px;
	}
`;

export const FindSectionInstaLinkWrapper = styled.div`
	height: 100%;
	width: 450px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 600px) {
		width: 250px;
	}
`;

export const FindSectionInstaLink = styled.a`
	position: relative;
	padding: 12px 27px;
	border: 1px solid var(--primary-color-dark);
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	transition: all 0.4s ease-in-out;

	h2 {
		font-size: 18px;
		font-weight: bold;

		@media (max-width: 600px) {
			font-size: 14px;
		}
	}

	::before {
		content: '';
		position: absolute;
		background: var(--primary-color-light);
		height: 1px;
		width: 30px;
		top: -1px;
		left: 10px;
		transition: left 0.4s linear;
	}

	::after {
		content: '';
		position: absolute;
		background: var(--primary-color-light);
		height: 1px;
		width: 30px;
		bottom: -1px;
		right: 10px;
		transition: right 0.4s linear;
	}

	:hover {
		padding: 8px 13px;

		::before {
			left: 25%;
		}
		
		::after {
			right: 25%;
		}

		svg: {
			color: white;
		}
	}

	@media (max-width: 600px) {
		flex-direction: row-reverse;
		justify-content: center;
		align-items: c;
		width: 250px;
		gap: 10px;
	}
`;

export const InstaLink = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;

	span {
		@media (max-width: 600px) {
			display: none;
		}
	}
`;
