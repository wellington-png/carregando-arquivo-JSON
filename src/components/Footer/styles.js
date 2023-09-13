import styled from 'styled-components';


const FooterContainer = styled.footer`
    grid-area: footer;
    background-color: #297a15;
    padding: 1.25rem;
    border-radius: 1rem 1rem 0 0;

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1.25rem;
        padding: 0.2rem;
    }

    .logo img {
        width: 100%;
        max-width: 150px;
    }

    .direitos {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1.25rem;
        background-color: #fff;
        border-radius: 0.5rem;
        padding: 0.2rem;
    }

    .direitos p {
        font-size: 0.6rem;
        font-weight: 700;
        color: #297a15;
    }



`;

export default FooterContainer;