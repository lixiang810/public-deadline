import { Stack, Text } from "@fluentui/react";
import { Provider } from "react-redux";
import Tasks from "./components/Task";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Stack
        style={{ marginLeft: 16, marginRight: 16 }}
        verticalAlign="center"
        horizontalAlign="center"
      >
        <Text variant="xxLargePlus">ζηεΎε</Text>
        <Tasks />
      </Stack>
    </Provider>
  );
}

export default App;
