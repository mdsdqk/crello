import { useAppState } from "../state/AppStateContent";
import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";

type ColumnProps = React.PropsWithChildren<{
	id: string,
	title: string
}>

export function Column({ id, title }: ColumnProps) {
	const { getTasksByListId } = useAppState();
	const tasks = getTasksByListId(id);

	return (
		<ColumnContainer>
			<ColumnTitle>{title}</ColumnTitle>
			{tasks.map(({ id, content }) => <Card id={id} content={content} />)}
			<AddNewItem dark={true} toggleButtonText="+ Add New Item" onAdd={(content) => tasks.push({
				id: tasks.length.toString(),
				content: content
			})}
			/>
		</ColumnContainer>
	)
}