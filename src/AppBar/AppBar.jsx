import styles from './AppBar.module.css';
import Navigation from 'components/NavMenu/NavMenu';
import Container from './Container/Container';

export default function AppBar() {
  return (
    <header className={styles.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
}
