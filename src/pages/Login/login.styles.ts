import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
  display: flex;
  justify-content: center;
	flex-direction: column;
	align-items: center;
	margin-top: 25px;
	padding: 0 200px;

	img {
		width: 37px;
		height: 37px;
	}

	h1 {
		margin-top: 35px;
		font-size: 25px;
	}

	div {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 5px 0;
		width: 100%;


	}

`;