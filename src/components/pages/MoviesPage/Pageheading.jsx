import style from './PageHeading.module.css';

export default function PageHeading({ text }) {
  return <h1 className={style.title}>{text}</h1>;
}
