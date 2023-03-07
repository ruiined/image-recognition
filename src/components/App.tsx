import { Tab } from "@headlessui/react";
import { CATEGORIES } from "@/utils/constants";
import Table from "./Table";

const App = () => {
  return (
    <div>
      <h1>Image Recognition</h1>
      <Tab.Group>
        <Tab.List>
          {CATEGORIES.map(({ title }: { title: string }) => (
            <Tab key={title}>{title}</Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {CATEGORIES.map(
            ({
              title,
              columns,
            }: {
              title: string;
              columns: { header: string; accessor: string }[];
            }) => (
              <Tab.Panel key={title}>
                <Table title={title} columns={columns} />
              </Tab.Panel>
            )
          )}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default App;
