import styled from "styled-components";


const NavBarContainer = styled.div`
    display: flex;
    grid-area: navbar;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.25rem;
    background-color: #fff;
    border-bottom: 1px solid #ccc;

    .search {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 300px;
        height: 2.5rem;
        border-radius: 0.5rem;
        background-color: #f5f5f5;
        margin-right: 1rem;

        input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            padding: 0 0.5rem;
            border-radius: 0.5rem 0 0 0.5rem;
            font-size: 0.8rem;
            font-weight: 700;
            color: #297a15;
        }

        button {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            border-radius: 0 0.5rem 0.5rem 0;
            background-color: #297a15;
            color: #fff;
            font-size: 0.8rem;
            font-weight: 700;
            cursor: pointer;
        }
    }

    .icon_navbar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 200px;

        .icons {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            background-color: #f5f5f5;
            margin-right: 1rem;
            cursor: pointer;

            img {
                width: 100%;
                max-width: 1.5rem;
            }
        }

        .user {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            background-color: #f5f5f5;
            margin-right: 1rem;
            cursor: pointer;

            img {
                width: 100%;
                max-width: 1.5rem;
            }

            &:hover {
                background-color: #297a15;
            }

        }
    }


`;

export default NavBarContainer;