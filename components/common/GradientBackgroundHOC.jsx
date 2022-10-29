import {
    GradientBGDark,
    WavesContainer,
    StyledWaves
} from "styles/emotion/common/gradient-background-hoc";
import Waves from "public/waves.svg";

const GradientBackgroundHOC = (props) => {
    const {children, showWaveFooter, showShadowOverlay, reverseOverlay} = props;
    return (
        <GradientBGDark 
            showShadowOverlay={showShadowOverlay}
            reverseOverlay={reverseOverlay}
            >
            {children}
            {showWaveFooter && (
                <WavesContainer>
                    <StyledWaves />
                </WavesContainer>
            )}
        </GradientBGDark>
    );
};

export default GradientBackgroundHOC;
