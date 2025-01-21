import { useProjects } from '../../utils/hooks/useProjects';
import styles from './Projects.module.scss';
import addButton from './../../vendor/images/arrow-button.svg';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import useWindowWidth from '../../utils/hooks/useWindowWidth';
import { useTranslation } from 'react-i18next';
import { useInView } from 'motion/react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Lang, Project } from '../../utils/api/apiTypes';
import { WINDOW_WIDTH_TABLET } from '../../utils/consts';

function Projects() {
  const { language } = useContext(LanguageContext);
  const { width } = useWindowWidth();
  const [index, setIndex] = useState(0);
  const [projectsDisplayed, setProjectsDisplayed] = useState<Project[] | never[]>([]);
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const data = useProjects(language as Lang, isInView);

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
    if (projects && width > WINDOW_WIDTH_TABLET) {
      setProjectsDisplayed(projects.slice(index, index + 4));
    } else {
      setProjectsDisplayed(projects.slice(index, index + 3));
    }
  }, [setProjectsDisplayed, index, projects, width]);

  if (projectsDisplayed)
    return (
      <section id="examples" ref={ref} className={styles.projects}>
        <h2 className={styles.projects__title}>{t('components.projects.completedProjects')}</h2>
        <ul className={styles.projects__grid}>
          <li className={styles.projects__grid_description}>
            <h2 className={styles.projects__grid_description_count}>{projects.length}</h2>
            <p className={styles.projects__grid_description_text}>{t('components.projects.projectsWithBigCompanies')}</p>
          </li>
          {projectsDisplayed.map((project, index) => {
            return (
              <li className={styles.projects__grid_project} key={`${project.id} - ${index}`}>
                <h5 className={styles.projects__grid_project_title}>{project.title}</h5>
                <video className={styles.projects__grid_project_video} autoPlay muted loop>
                  <source src={project.webm} type="video/webm" />
                  <source src={project.mp4} type="video/mp4" />
                  {t('components.projects.yourBrowserDoesnotSupportEmbeddedVideos')}
                </video>
              </li>
            );
          })}
          <li className={styles.projects__grid_add}>
            <button className={styles.projects__grid_add_button} type="button" onClick={handleClick}>
              {width > WINDOW_WIDTH_TABLET ? <img className={styles.projects__grid_add_button_image} src={addButton}></img> : <p className={styles.projects__grid_add_button_more}>{t('components.projects.loadMore')}</p>}
            </button>
          </li>
        </ul>
      </section>
    );
}

export default Projects;
