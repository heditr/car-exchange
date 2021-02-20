import styled from 'styled-components'

const Link = ({ className, children } ) => {
  return (
    <a className={className} >
      {children}
    </a>
  );
};

const StyledLink = styled(Link)`
  font-size: 16px;
  font-family: Montserrat;
  text-decoration: none;
`;

export default Link;
export {
    StyledLink
};
