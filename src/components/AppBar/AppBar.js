import style from './AppBar.module.css';
import Navigation from 'components/Navigation/Navigation';

export default function AppBar() {
  return (
    <header className={style.header}>
      <div className={style.nav}>
        <Navigation />
      </div>
    </header>
  );
}
