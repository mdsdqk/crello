import { useState } from "react";
import { AddItemButton } from "../styles"
import { NewItemForm } from "./NewItemForm";

type AddNewItemProps = React.PropsWithChildren<{
	onAdd(content: string): void,
	toggleButtonText: string,
	dark?: boolean
}>

export function AddNewItem(props: AddNewItemProps) {
	const [showForm, setShowForm] = useState(false);

	if (showForm) {
		return <NewItemForm onAdd={(text) => {
			props.onAdd(text);
			setShowForm(false);
		}}
		/>
	}

	return (
		<AddItemButton dark={props.dark} onClick={() => setShowForm(true)}>
			{props.toggleButtonText}
		</AddItemButton>
	)
}