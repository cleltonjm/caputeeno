import { styled } from 'styled-components';

export const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }

    @media (min-width: 968px) {
        padding: 20px 160px;
    }
`;

export const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    text-decoration: none;

    @media (min-width: 768px) {
        font-size: 24px;
    }

    @media (min-width: 968px) {
        font-size: 40px;
    }
`;