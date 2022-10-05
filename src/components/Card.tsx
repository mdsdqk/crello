import { CardContainer } from "../styles"

type CardProps = React.PropsWithChildren<{
	id: string,
	content: string
}>

export function Card({ content }: CardProps) {
	return (
		<CardContainer>
			{content}
		</CardContainer>
	)
}