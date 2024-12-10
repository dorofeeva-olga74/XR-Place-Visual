import { useProjects } from '../../utils/hooks/useProjects';
import styles from './Projects.module.scss';
import arrowButton from './../../vendor/images/arrow-button.svg';
import { useEffect, useMemo, useRef, useState } from 'react';
import useWindowWidth from '../../utils/hooks/useWindowWidth';
import { useTranslation } from 'react-i18next';
import { useInView } from 'motion/react';

function Projects() {
  const { width } = useWindowWidth();
  const [index, setIndex] = useState(0);
  const [projectsDisplayed, setProjectsDisplayed] = useState([]);
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const data = useProjects('RU', isInView);
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
    if (projects && width > 460) {
      setProjectsDisplayed(projects.slice(index, index + 4));
    } else {
      setProjectsDisplayed(projects.slice(index, index + 3));
    }
  }, [setProjectsDisplayed, index, projects, width]);

  if (projectsDisplayed)
    return (
      <div ref={ref} className={styles.projects}>
        <h2 className={styles.projects__title}>{t('components.projects.completedProjects')}</h2>
        <ul className={styles.projects__grid}>
          <li className={styles.projects__description}>
            <h2 className={styles.projects__description_count}>{projects.length}</h2>
            <p className={styles.projects__description_text}>{t('components.projects.projectsWithBigCompanies')}</p>
          </li>
          {projectsDisplayed.map((project, index) => {
            return (
              <li className={styles.projects__project} key={`${project.id} - ${index}`}>
                <h5 className={styles.projects__project_title}>{project.title}</h5>
                <div className={styles.projects__video_container}>
                  <video className={styles.projects__video} autoPlay muted loop>
                    <source src={project.webm} type="video/webm" />
                    <source src={project.mp4} type="video/mp4" />
                    {t('components.projects.yourBrowserDoesnotSupportEmbeddedVideos')}
                  </video>
                </div>
              </li>
            );
          })}
          <li className={styles.projects__arrow}>
            <button className={styles.projects__arrow_button} type="button" onClick={handleClick}>
              {width > 460 ? <img className={styles.projects__arrow_image} src={arrowButton}></img> : <p className={styles.projects__loadmore}>{t('components.projects.loadMore')}</p>}
            </button>
          </li>
        </ul>
      </div>
    );
}

export default Projects;
