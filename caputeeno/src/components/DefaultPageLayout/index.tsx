import styled from "styled-components";

export const DefaultPageLayout = styled.div`
    padding: 12px 24px;
    min-height: 100vh;
    background-color: var(--bg-primary);

    @media (min-width: 968px) {
        padding: 34px 160px;
    }
`;