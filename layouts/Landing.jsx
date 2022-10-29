import {
    LandingRootContainer,
    LandingContentContainer,
    LandingContentTitle
} from "styles/emotion/landing/landing-styles";
import GradientBackgroundHOC from "components/common/GradientBackgroundHOC";
import Header from "components/header/Header";

const LandingComponent = (props) => {
    return (
        <LandingRootContainer>
            <GradientBackgroundHOC showWaveFooter showShadowOverlay>
                <Header />
                <LandingContentContainer>
                    <LandingContentTitle>
                        Landing Title Here
                    </LandingContentTitle>
                </LandingContentContainer>
            </GradientBackgroundHOC>
        </LandingRootContainer>
    );
};

export default LandingComponent;
