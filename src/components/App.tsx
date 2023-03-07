import { Tab } from "@headlessui/react";

const CATEGORIES = [{ title: "Images" }, { title: "Predictions" }];

const App = () => {
  return (
    <div>
      <h1>Image Recognition</h1>
      <Tab.Group>
        <Tab.List>
          {CATEGORIES.map(({ title }) => (
            <Tab key={title}>{title}</Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <table className="table-auto">
              <thead>
                <tr>Name</tr>
              </thead>
              <tbody>
                <tr>
                  <td>Value</td>
                </tr>
              </tbody>
            </table>
          </Tab.Panel>
          <Tab.Panel>Prediction table</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default App;
