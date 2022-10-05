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
	margin-right: 20px;
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
	margin-bottom: 8px;
	padding: 8px;
	max-width: 300px;
	border-radius: 4px;
	box-shadow: #091e4240 0px 1px 0px 0px;
`

type AddItemButtonProps = {
	dark?: boolean
}

export const AddItemButton = styled.button<AddItemButtonProps>`
	background-color: #ffffff3d;
	border-radius: 4px;
	border: none;
	color: ${(props) => props.dark ? "#000" : "#fff"};
	text-align: left;
	cursor: pointer;
	padding: 12px;
	max-width: 300px;
	transition: background 100ms ease-in;
	width: 100%;
	&:hover {
		background-color: #ffffff52;
	}
`

export const NewItemFormContainer = styled.div`
	max-width: 285px;
	display: flex;
	flex-direction: column;
	width: 90%;
	align-items: flex-start;
	min-height: 40px;
`

export const NewItemButton = styled.button`
	background-color: #5aac44;
	border-radius: 4px;
	border: none;
	box-shadow: none;
	color: #fff;
	padding: 6px 12px;
	cursor: pointer;
`

export const NewItemInput = styled.input`
	border-radius: 4px;
	border: none;
	box-shadow: #091e4240 0px 1px 0px 0px;
	margin-bottom: 8px;
	padding: 8px;
	width: 100%;
`