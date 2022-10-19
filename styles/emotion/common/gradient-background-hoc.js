import styled from "@emotion/styled";
import Waves from "public/waves.svg";
import getStyleConstants from "utils/js/style-constants";

const CONSTANTS = getStyleConstants();

export const GradientBGDark = styled.div`
    height: inherit;
    background: linear-gradient(
        109.6deg,
        rgb(157, 75, 199) 11.2%,
        rgb(119, 81, 204) 83.1%
    );
    ${({showShadowOverlay}) =>
        showShadowOverlay &&
        `&::after {
        content: "";
        display: inline-block;
        width: 100%;
        height: inherit;
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: black;
        mask-image: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(${CONSTANTS.primary_bg_color.concat("FF")}), /* Max Opacity */
            to(${CONSTANTS.primary_bg_color.concat("00")}) /* Min Opacity */
        );
      }`}
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
