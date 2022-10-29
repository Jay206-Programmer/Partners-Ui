import styled from "@emotion/styled";
import getStyleConstants from "utils/js/style-constants";

const CONSTANTS = getStyleConstants();

export const PartnersRootContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${CONSTANTS.primary_bg_color};
`;

export const PartnersWrapper = styled.div`
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
`;

export const PartnerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: hotpink;
  height: 6rem;
  font-size: 42px;
  font-weight: 500;
`;
export const PartnerLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;
`;

export const PartnerLogo = styled.div`
  width: 200px;
  height: 200px;
  background: linear-gradient(109.6deg, rgb(157, 75, 199) 11.2%, rgb(119, 81, 204) 83.1%); 
  border-radius: 50%;
  transition: all 250ms;
  margin: 30px 40px;
  &:hover {
    width: 250px;
    height: 250px;
    background: linear-gradient(109.6deg, hotpink 11.2%, #cecece 83.1%);;
    background-color: hotpink;
  }
`;