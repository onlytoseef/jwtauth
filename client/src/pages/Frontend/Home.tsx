import AddTodo from "../../components/AddTodo";
import AllTodo from "../../components/AllTodo";

export default function Home() {
  return (
    <div className="text-center flex flex-col min-h-screen justify-center items-center ">
      <AddTodo />
      <AllTodo />
    </div>
  );
}
