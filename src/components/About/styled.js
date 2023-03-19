import styled from 'styled-components';
import { Carousel_2 } from '../../assets';

export const AboutSectionLayout = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 33px;
	padding: 66px;
`;
export const AboutSectionTitle = styled.h2`
	font-size: 45px;
`;

export const AboutSectionContent = styled.div`
	/* display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 66px; */
	vertical-align: middle;
`;

export const AboutSectionImage = styled.div`
	height: 250px;
	width: 250px;
	display: inline-block;
	margin-right: 50px;

	background: url(${Carousel_2});
	background-size: cover;
	border-radius: 10px;

	@media (max-width: 720px) {
		display: none;
	}
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
