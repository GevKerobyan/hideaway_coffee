import styled from 'styled-components';

export const HeroLayout = styled.section`
	width: 100vw;
	padding: 100px 0;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;
`;

export const HeroLayoutInfo = styled.div`
	flex-grow: 1;
  text-align: center;
   
	h1 {
		font-size: 56px;
    margin-bottom: 10px;
	}

	h2 {
		font-size: 13px;
	}
`;

export const HeroSliderWrapper = styled.div`
	flex-grow: 2;
  height: 60vh;
	width: 100%;
	background-color: azure;

	img {
		width: 100%;
		height: auto;
		max-height: 100%;
	}
`;
