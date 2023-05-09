import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Oj Abdessamad </span>
        from <span className={s.purple}> Morocco, Rabat.</span>
        <br />
        Software engineer with expertise in web and cross-platform development{' '}
        <br />
        using Flutter.
        <br />
        <br />
        I have a Bachelor's degree in Computer Science and
        <br />
        Master's degree in Network and Telecommunications Engineering from FST Settat.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
