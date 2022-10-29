import styled from "@emotion/styled";
import Waves from "public/waves.svg";
import getStyleConstants from "utils/js/style-constants";

const CONSTANTS = getStyleConstants();

export const GradientBGDark = styled.div`
    height: inherit;
    background: 
        ${props => (
            props.showShadowOverlay
            ? `linear-gradient(${props.reverseOverlay ? '0deg' : '180deg'}, ${CONSTANTS.primary_bg_color.concat("FF")},${CONSTANTS.primary_bg_color.concat("00")})`
            : 'linear-gradient(180deg, #00000000, #00000000)')},
        linear-gradient(109.6deg, rgb(157, 75, 199) 11.2%, rgb(119, 81, 204) 83.1%);
`;

export const WavesContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
`;

export const StyledWaves = styled(Waves)`
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 148px;
    transform: rotateY(180deg);
    fill: ${CONSTANTS.primary_bg_color};
`;
