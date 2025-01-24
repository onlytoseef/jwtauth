import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getAllTodo } from "../../store/features/todoSlice";

export default function AllTodo() {
  const dispatch = useDispatch<AppDispatch>();
  const { todo, isLoading, error } = useSelector(
    (state: RootState) => state.todo
  );

  const handleGetAllTodo = () => {
    dispatch(getAllTodo());
  };

  return (
    <main>
      <button
        onClick={handleGetAllTodo}
        className="bg-green-600 rounded-lg mt-5 text-white p-2"
      >
        Get Todos
      </button>

      {isLoading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Task Name
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                category
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todo.map(({ _id, name, description, category }) => (
              <tr
                key={_id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {name}
                </th>
                <td className="px-6 py-4">{_id}</td>
                <td className="px-6 py-4">{description}</td>
                <td className="px-6 py-4">{category}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
