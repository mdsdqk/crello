import { createContext, useContext } from "react"

type Task = {
	id: string,
	content: string
}

type List = {
	id: string,
	title: string,
	tasks: Array<Task>
}

export type AppState = {
	lists: Array<List>
}

const appData: AppState = {
	lists: [
		{
			id: "0",
			title: "Todo",
			tasks: [
				{
					id: "01", content: "First Task"
				},
				{
					id: "02", content: "Second Task"
				},
				{
					id: "03", content: "3rd Task"
				}
			]
		},
		{
			id: "1",
			title: "In Progress",
			tasks: [
				{
					id: "13", content: "3rd Task in progress"
				}
			]
		},
		{
			id: "2",
			title: "Completed",
			tasks: [
				{
					id: "21", content: "First Task completed"
				},
				{
					id: "22", content: "Second Task completed"
				}
			]
		}
	]
}

type AppStateContextProps = {
	lists: Array<List>
	getTasksByListId(id: string): Array<Task>
}

type AppStateProviderProps = React.PropsWithChildren<{}>

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export function AppStateProvider({ children }: AppStateProviderProps) {
	const { lists } = appData;

	function getTasksByListId(id: string) {
		return lists.find(list => list.id === id)?.tasks || [];
	}

	return (
		<AppStateContext.Provider value={{ lists, getTasksByListId }}>
			{children}
		</AppStateContext.Provider>
	)
}

export function useAppState() {
	return useContext(AppStateContext);
}