
import { Button } from './InfoUser.styled';

const { useSelector, useDispatch } = require('react-redux');
const { selectUser } = require('redux/user/userSelect');
const { logoutThunk } = require('redux/user/userThunk');

const InfoUser = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(logoutThunk());
  };
  return (
    <div>
      {user && (
          <Button
            onClick={handleSubmit}
          >
            Log Out
          </Button>
      )}
    </div>
  );
};

export default InfoUser;
