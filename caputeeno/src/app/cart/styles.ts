import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 32px;

    @media(min-width: 968px){
        flex-direction: row;
    }
`;

export const CartListContainer = styled.div`
    h3 {
        font-size: 24px;
        font-weight: 500;
        line-height: 150%;
        text-transform: uppercase;
        color: var(--text-dark-2);
        margin-top: 24px;
    }

    p {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);

        span {
            font-weight: 600;
        }
    }
`;

export const CartList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
`;

export const CartResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 352px;
    padding: 16px 24px;

    background: white;

    h3 {
        font-weight: 600;
        font-size: 20px;
        color: var(--text-dark-2);
        text-transform: uppercase;
        margin-bottom: 30px;
    }
`;

export const TotalItem = styled.div<{ isBold: boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    font-weight: ${props => props.isBold ? '600' : '400'};
    font-size: 16px;
    line-height: 150%;

    margin-bottom: 12px;
`;

export const ShopBtn = styled.button`
    color: white;
    border-radius: 4px;
    background: var(--success-color);
    padding: 12px;
    width: 100%;
    border: none;
    margin-top: 40px;
    cursor: pointer;
`;