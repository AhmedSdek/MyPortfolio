
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div style={{ alignItems: 'center' }} className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div style={{ justifyContent: 'center', display: 'flex', width: '100px', height: '100px' }} key={technology.name}>
          <img width='100px' height='100px' src={technology.icon} alt=""></img>
        </div>
      ))}
    </div>
  );
};

export default Tech;
