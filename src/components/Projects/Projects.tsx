import { useProjects } from '../../utils/hooks/useProjects';
import styles from './Projects.module.scss';
import arrowButton from './../../vendor/images/arrow-button.svg';

function Projects() {
  const projects = useProjects('RU');

  if (projects.isSuccess)
    return (
      <div className={styles.projects}>
        <h2 className={styles.projects__title}>Реализованные проекты</h2>
        <ul className={styles.projects__grid}>
          <li className={styles.projects__description}>
            <h2 className={styles.projects__description_count}>{projects.data.length}</h2>
            <p className={styles.projects__description_text}>проекта с крупными заказчиками</p>
          </li>
          {projects.data.map((project) => {
            return (
              <li className={styles.projects__project} key={project.id}>
                <h5 className={styles.projects__project_title}>{project.title}</h5>
                <video className={styles.projects__video} autoPlay muted loop>
                  <source src={project.webm} type="video/webm" />
                  <source src={project.mp4} type="video/mp4" />
                  Ваш браузер не поддерживает встроенные видео
                </video>
              </li>
            );
          })}
          <li className={styles.projects__arrow}>
            <img className={styles.projects__arrow_image} src={arrowButton}></img>
          </li>
        </ul>
      </div>
    );
}

export default Projects;
