import SvgCreator from '../SvgCreator';
import logo from '../../../public/mr-logo.svg'

const Logo = ({ alt = 'logo' }) => {
  return (
    <div style={{cursor: 'pointer'}} role="img" alt={alt}>
        <SvgCreator width={98} height={40} url={logo} />
    </div>
  );
};

export default Logo;
