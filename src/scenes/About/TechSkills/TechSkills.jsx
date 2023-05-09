import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiLaravel,
  DiMysql,
  DiDocker,
  DiSass,
  DiGit,
  DiBootstrap,
} from 'react-icons/di';
import {
  SiTypescript,
  SiSpringboot,
  SiPusher,
  SiFlutter,
  SiOracle,
  SiArduino,
  SiPhp
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>
      <li className={s.techIcon}>
        <DiLaravel />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiMysql />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <SiFlutter />
      </li>
      <li className={s.techIcon}>
        <SiSpringboot />
      </li>
      <li className={s.techIcon}>
        <SiPusher />
      </li>
      <li className={s.techIcon}>
        <DiDocker />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <DiBootstrap />
      </li>
      <li className={s.techIcon}>
        <SiOracle />
      </li>
      <li className={s.techIcon}>
        <SiArduino />
      </li>
      <li className={s.techIcon}>
        <SiPhp />
      </li>
    </ul>
  );
};

export default TechSkills;
