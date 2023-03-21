import styled from 'styled-components';

export const HeroLayout = styled.section`
	width: 100%;
	padding: 100px 0;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;

	@media (max-width: 600px) {
		padding: 0;
		height: 100vh;
	}
`;

export const HeroLayoutInfo = styled.div`
	flex-grow: 1;

	h1 {
		font-size: 56px;
		margin-bottom: 10px;

		@media (max-width: 900px) {
			font-size: 36px;
			gap: 25px;
		}
	}

	h2 {
		font-size: 15px;
		text-align: right;
		user-select: none;
	}
	
	@media (max-width: 600px) {
		position: absolute;
		top: 80px;
		z-index: 1;
		color: white;
	}
`;

export const HeroSliderWrapper = styled.div`
	flex-grow: 2;
	height: 470px;
	width: 100%;
	background-color: var(--primary-color-dark);

	button {
		@media (max-width: 600px) {
			display: none;
		}
	}

	@media (max-width: 600px) {
		height: 100%;
	}
`;

export const CarouselImageBox = styled.div`
	height: 470px;
	width: 100%;
	background: url(${(props) => props.background}) no-repeat center;
	background-size: contain;
	background-color: var(--primary-color-dark);

	img {
		width: auto;
		height: 100%;
		max-height: 100%;
	}

	li.slide {
		@media (max-width: 600px) {
			width: 100%;
		}
	}

	@media (max-width: 600px) {
		height: 100vh;
	}
`;
