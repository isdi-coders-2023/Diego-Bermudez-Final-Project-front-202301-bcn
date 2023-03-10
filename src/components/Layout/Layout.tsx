import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import FeedbackModal from "../FeedbackModal/FeedbackModal";
import Loader from "../Loader/Loader";
import { ReactComponent as Icon } from "../../assets/icons/xButton.svg";
import useToken from "../../hooks/useToken/useToken";
import { useEffect } from "react";

const Layout = (): JSX.Element => {
  const { getToken } = useToken();

  useEffect(() => {
    getToken();
  }, [getToken]);

  const {
    isLoading,
    feedbackModal: { isWrong, message, title },
  } = useAppSelector((state) => state.ui);

  return (
    <div className="container">
      <header></header>
      <main>
        {isLoading && <Loader />}
        {isWrong && (
          <FeedbackModal title={title} message={message} icon={<Icon />} />
        )}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
