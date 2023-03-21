import styled from 'styled-components';

export const AboutSectionLayout = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 33px;
	padding: 66px;

	@media (max-width: 600px) {
		height: auto;
		margin-top: 50px;
		padding: 0 25px;
	}
`;

export const AboutSectionTitle = styled.h2`
	font-size: 45px;
	user-select: none;
`;

export const AboutSectionText = styled.div`
	display: table-cell;
	width: calc(100% - 300px);
	font-size: 18px;
	line-height: 35px;
	vertical-align: middle;
	text-align: center;
	
	@media (max-width: 720px) {
		width: 100%;
	}
`;
