import {
  PartnersRootContainer,
  PartnersWrapper,
  PartnerHeader,
  PartnerLogoContainer,
  PartnerLogo
} from "styles/emotion/partners/partners-styles"

const PartnersComponent = (props) => {
  return (
    <PartnersRootContainer>
      <PartnersWrapper>
        <PartnerHeader>
          Our Partners
        </PartnerHeader>
        <PartnerLogoContainer>
          <PartnerLogo />
          <PartnerLogo />
          <PartnerLogo />
        </PartnerLogoContainer>
      </PartnersWrapper>
    </PartnersRootContainer>
  );
};

export default PartnersComponent;