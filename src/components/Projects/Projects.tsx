import { useProjects } from '../../utils/hooks/useProjects';
import styles from './Projects.module.scss';
import arrowButton from './../../vendor/images/arrow-button.svg';
import { useEffect, useMemo, useState } from 'react';

function Projects() {
  const [index, setIndex] = useState(0);
  const [projectsDisplayed, setProjectsDisplayed] = useState([]);
  const data = useProjects('RU');
  // artificially make projects array longer to demonstrate 'load more' button click effect
  const projects = useMemo(() => (data.isSuccess ? data.data.concat(data.data) : []), [data.isSuccess, data.data]);
  const handleClick = () => {
    if (projects.length - index > 4) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setIndex((prevIndex) => prevIndex);
    }
  };
  useEffect(() => {
    if (projects) {
      setProjectsDisplayed(projects.slice(index, index + 4));
    }
  }, [setProjectsDisplayed, index, projects]);

  if (projectsDisplayed)
    return (
      <div className={styles.projects}>
        <h2 className={styles.projects__title}>Реализованные проекты</h2>
        <ul className={styles.projects__grid}>
          <li className={styles.projects__description}>
            <h2 className={styles.projects__description_count}>{projects.length}</h2>
            <p className={styles.projects__description_text}>проектов с крупными заказчиками</p>
          </li>
          {projectsDisplayed.map((project, index) => {
            return (
              <li className={styles.projects__project} key={`${project.id} - ${index}`}>
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
            <button className={styles.projects__arrow_button} type="button" onClick={handleClick}>
              <img className={styles.projects__arrow_image} src={arrowButton}></img>
            </button>
          </li>
        </ul>
      </div>
    );
}

export default Projects;
