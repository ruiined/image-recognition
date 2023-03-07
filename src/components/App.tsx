import { Tab } from "@headlessui/react";
import { CATEGORIES } from "@/utils/constants";
import Table, { Columns } from "./Table";
import { classNames } from "@/utils/helpers";

const App = () => {
  return (
    <div className="flex justify-center mt-12 text-slate-900 bg-slate-50">
      <div className="w-full max-w-3xl px-2 py-16 sm:px-0">
        <h1 className="text-2xl font-bold text-center mt-24 mb-12 uppercase text-blue-600">
          Image Recognition
        </h1>
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-slate-100 p-1">
            {CATEGORIES.map(({ title }: { title: string }) => (
              <Tab
                key={title}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all",
                    selected
                      ? "bg-white text-blue-700 shadow ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                      : "text-slate-600 hover:text-slate-900"
                  )
                }
              >
                {title}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="pt-6">
            {CATEGORIES.map(
              ({ title, columns }: { title: string; columns: Columns }) => (
                <Tab.Panel
                  key={title}
                  className="rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                >
                  <Table title={title} columns={columns} />
                </Tab.Panel>
              )
            )}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default App;
