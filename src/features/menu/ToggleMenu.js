import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from './menuSlice';

const ToggleMenu = (props) => {
  const show = useSelector(state => state.menu.show);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggleMenu(props.showMenu))}>
      { show ? 'Off': 'On' }
    </button>
  );
}

export default ToggleMenu;
