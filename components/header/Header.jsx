import { 
  HeaderContainer,
  LogoContainer,
  Logo,
  MenuContainer,
  MenuItem,
  AuthContainer,
  AuthLogo
} from "styles/emotion/header/header";

const Header = (props) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>
          LOGO
        </Logo>
      </LogoContainer>
      <MenuContainer>
        <MenuItem>
          Home
        </MenuItem>
        <MenuItem>
          About Us
        </MenuItem>
        <MenuItem>
          Case Studies
        </MenuItem>
        <MenuItem>
          Menu D
        </MenuItem>
        <MenuItem>
          Menu E
        </MenuItem>
      </MenuContainer>
      <AuthContainer>
        <AuthLogo />
      </AuthContainer>
    </HeaderContainer>
  )
};

export default Header;