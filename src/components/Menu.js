import { useSelector } from 'react-redux';
import Navigate from './Navigate';

const Menu = () => {
  const show = useSelector(state => state.menu.show);

  return (
    <div>
      { show && <Navigate/> }
    </div>
  );
}

export default Menu;