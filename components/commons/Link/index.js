import styled from 'styled-components'

const Link = ({ className, children } ) => {
  return (
    <a className={className} href="#">
      {children}
    </a>
  );
};

const StyledLink = styled(Link)`
  font-size: 16px;
  font-family: MontserratBold, serif;
  font-weight: bold;
  text-decoration: none;
  color: #000000;
  margin-right: 10px;
  &:link{
    text-decoration: none;
  }
`;

export default Link;
export {
    StyledLink
};
