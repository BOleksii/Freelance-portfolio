import project01 from './../../img/image/photo-1.avif'

import './style.css';


const Project = ({title, img, skils, gitHabLink }) => {
  return (
    <li className="project">
      <a href={project01}>
        <img className='project__img' src={img} alt="Project__img"></img>
        <h3 className="project__title">{title}</h3>
		<p>{skils}</p>
		<p>{gitHabLink}</p>
      </a>
    </li>
  );
};

export default Project;
