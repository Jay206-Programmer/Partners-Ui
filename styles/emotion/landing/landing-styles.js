import styled from "@emotion/styled";

export const LandingRootContainer = styled.div`
  height: 100vh;
`;

export const LandingContentContainer = styled.div`
  width: 100%;
  padding: 50px;
  height: calc(100vh - 6rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LandingContentTitle = styled.div`
  color: black;
  font-size: 70px;
  font-weight: 500;

  /* Animated Title Loop Code */
  background: linear-gradient(
    125deg,
    hotpink,
    black,
    hotpink,
    black,
    hotpink
  );
  background-size: 200%;
  animation: background-pan 5.5s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @keyframes background-pan {
    from {
      background-position: 0% center;
    }

    to {
      background-position: -200% center;
    }
  }
`