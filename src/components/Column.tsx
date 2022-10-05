import { CardContainer, ColumnContainer, ColumnTitle } from "../styles";

type ColumnProps = React.PropsWithChildren<{
	title: string
}>

export function Column({ title }: ColumnProps) {
	return (
		<ColumnContainer>
			<ColumnTitle>{title}</ColumnTitle>
			<CardContainer>First Item</CardContainer>
			<CardContainer>Second Item</CardContainer>
			<CardContainer>Third Item</CardContainer>
		</ColumnContainer>
	)
}