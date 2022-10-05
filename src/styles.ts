import styled from "styled-components";

export const AppContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	height: 100%;
	width: 100%;
	padding: 20px;
	background-color: #3179ba;
`

export const ColumnContainer = styled.div`
	background-color: #ebecf0;
	width: 300px;
	min-height: 40px;
	border-radius: 4px;
	padding: 8px;
	flex-grow: 0;
`

export const ColumnTitle = styled.div`
	padding: 6px 16px 12px;
	font-weight: bold;
`

export const CardContainer = styled.div`
	background-color: #fff;
	cursor: pointer;
	margin-bottom: 4px;
	padding: 4px 8px;
	max-width: 300px;
	border-radius: 4px;
	box-shadow: #091e4240 0 1 0 0;
`
