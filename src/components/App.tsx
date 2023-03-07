import { Tab } from "@headlessui/react";

const App = () => {
  return (
    <div>
      <h1>Image Recognition</h1>
      <Tab.Group>
        <Tab.List>
          <Tab>Images</Tab>
          <Tab>Predictions</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Image table</Tab.Panel>
          <Tab.Panel>Prediction table</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default App;
