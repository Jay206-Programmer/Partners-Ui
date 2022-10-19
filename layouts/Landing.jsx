import {LandingRootContainer} from "styles/emotion/landing/landing-styles";
import GradientBackgroundHOC from "components/common/GradientBackgroundHOC";
import Header from "components/common/Header";

const LandingComponent = (props) => {
    return (
        <LandingRootContainer>
            <GradientBackgroundHOC showWaveFooter showShadowOverlay>
                <Header />
            </GradientBackgroundHOC>
        </LandingRootContainer>
    );
};

export default LandingComponent;
