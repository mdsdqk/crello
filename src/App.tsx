import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Column";
import { useAppState } from "./state/AppStateContent";
import { AppContainer } from "./styles";

export function App() {
  const { lists } = useAppState();

  return <AppContainer>
    {lists.map(({ id, title }) => <Column title={title} id={id} />)}
    <AddNewItem toggleButtonText=" + Add New List" onAdd={(title) => lists.push({
      id: lists.length.toString(),
      title: title,
      tasks: []
    })}
    />
  </AppContainer>
}
