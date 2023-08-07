import { FormContextProvider } from "./context/FormContext";
import Form from "./pages/Form";

function App() {
  return (
    <FormContextProvider>
      <Form />
    </FormContextProvider>
  );
}

export default App;
