import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  color: white;
  height: 6rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: 30%;
  padding-left: 50px;
`;

export const Logo = styled.div`
  color: hotpink;
  font-size: 36px;
  font-weight: 700;
`;


export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;

export const MenuItem = styled.div`
  color: #cecece;
  padding: 10px 10px;
  font-size: 18px;
  font-weight: 400;
  transition: all 250ms;
  user-select: none;
  &:hover {
    font-size: 24px;
    color: hotpink;
  }
  &:active {
    font-size: 20px;
    color: pink;
  }
`;

export const SearchContainer = styled.div`

`;

export const AuthContainer = styled.div`
  width: 30%;
`;

export const AuthLogo = styled.div`
  margin-right: 50px;
  margin-left: auto;
  width: 36px;
  height: 36px;
  background: hotpink; 
  border-radius: 50%
`;


