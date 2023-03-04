import style from './PageHeading.module.css';

export default function PageHeading({ text }) {
  return <h2 className={style.title}>{text}</h2>;
}
