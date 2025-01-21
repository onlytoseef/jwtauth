import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../store/features/getDataSlice";
import { AppDispatch, RootState } from "../../store/store";
import { logout } from "../../store/features/authSlice";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => {
    console.log(state.app);
    return state.app;
  });

  const message = data.message;
  const messageText = JSON.stringify(message);

  return (
    <div className="text-center flex flex-col min-h-screen justify-center items-center ">
      <h1>This is Homeapge</h1>
      <button
        className="bg-slate-700 hover:bg-slate-900 rounded-lg p-2 text-white "
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout User
      </button>
      <button
        className="bg-slate-700 hover:bg-slate-900 rounded-lg p-2 text-white "
        onClick={() => {
          dispatch(getAllData());
        }}
      >
        Get Data From Server
      </button>
      {messageText}
    </div>
  );
}
