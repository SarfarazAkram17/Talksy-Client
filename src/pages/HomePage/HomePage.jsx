import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router";
import { useChatStore } from "../../store/useChatStore";
import Sidebar from "../../components/Sidebar";
import NoChatSelected from "../../components/NoChatSelected";
import ChatContainer from "../../components/ChatContainer";

const HomePage = () => {
  const navigate = useNavigate();
  const { authUser } = useAuthStore();
  const { selectedUser } = useChatStore();

  if (!authUser) {
    navigate("/login");
  }

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-8 px-4">
        <div className="bg-base-100 rounded-lg shadow-xl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
