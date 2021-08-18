import styled from "styled-components"
import { colorScheme } from "./colors"
import { Link } from "react-router-dom"

//app container styles
export const AppContainer = styled.div`
  height: 100%;
  width: 90%;
  margin: auto;
  border-radius: 1rem;
  box-shadow: inset 6px 14px 30px -1px rgba(70, 72, 102, 0.75);
  -webkit-box-shadow: 6px 14px 30px -1px rgba(70, 72, 102, 0.75);
  -moz-box-shadow: 6px 14px 30px -1px rgba(70, 72, 102, 0.75);
  @media (max-width: 768px) {
    width: 100%;
    box-shadow: none;
    border-radius: 0;
    margin: 0;
  }
`;

//error page styles
export const ErrorPageContainer = styled.div`
    width: 100%;
    margin: 0rem auto;
    overflow: auto;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgb(37,39,77);
    background: linear-gradient(200deg, rgba(37,39,77,1) 0%, rgba(41,100,138,1) 51%, rgba(0,212,255,1) 100%);
    color: ${colorScheme.tertiary_color};
`;

//header styles
export const HeaderContainer = styled.div`
    background-color: ${colorScheme.primary_color};
    color: ${colorScheme.quaternary_color};
    width: 100%;
    margin: 2rem auto 0;
    padding: 0.4rem;
    position: sticky;
    top: -0.8rem;
    display: flex;
    align-items: center;
    border-radius: 1rem 1rem 0 0;
    >.header__left {
        flex: 0.1;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        >.logo__container {
            width: 4rem;
            height: 4rem;
            >.logo__img{
                object-fit: contain;
                max-width: 100%;
                height: auto;
            }
        }
    }
    >.header__middle {
        flex: 0.8;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    >.header__right {
        flex: 0.1;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 768px) {
        margin: 0;
        top: 0;
        border-radius: 0;
    }
`;



//footer styles
export const FooterContainer = styled.div`
    width: 100%;
    margin: 0 auto 1rem;
    border-radius: 0 0 1rem 1rem;
    background-color: ${colorScheme.primary_color};
    color: ${colorScheme.quaternary_color};
    height: 10rem;
    display: flex;
    flex-direction: column;
    >.footer__containerTop {
        flex: 0.9;
        display: flex;
        >.footer__container__topLeft {
            flex: 0.32;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 1rem;
            >h4 {
                letter-spacing: 0.2rem;
                word-spacing: 0.1rem;
                >span {
                    color: ${colorScheme.tertiary_color};
                    font-size: small;
                    padding-left: 0.2rem;
                    cursor: pointer;
                }
            }
        }
        >.footer__container__topRight {
            flex: 0.68;
            display: flex;
            justify-content: space-around;
            @media (max-width:768px) {
                flex-direction: column-reverse;
            }
            >.left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                >img {
                    height: 5rem;
                }
            }
            >.right {
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 1rem;
                >i {
                    margin: 1rem;
                    font-size: xx-large;
                }
            }
        }
        @media (max-width:768px) {
            flex-direction: column-reverse;
        }
    }
    >.footer__containerBottom {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0.1;
        text-align: center;
        >span:nth-child(1) {
            font-size: 2rem;
            margin: 0.1rem 0.2rem;
        }
        >span:nth-child(2) {
            font-size: 1rem;
            margin: 0.1rem 0.2rem;
        }
    }
    @media (max-width: 768px) {
        height: 100%;
        margin: 0;
        top: 0;
        border-radius: 0;
    }
`;

//sidebar styles
export const SidebarUnexpanded = styled.div`
    width: 100%;
    height: 100%;
    >.menu__icon {
        cursor: pointer;
        font-size: xx-large;
    }
`;

export const SidebarContainer = styled.div`
    top: 0;
    left: 0;
    background: rgb(37,39,77);
    background: linear-gradient(200deg, rgba(37,39,77,1) 0%, rgba(41,100,138,1) 51%, rgba(0,212,255,1) 100%);
    color: #ffffff;
    position: fixed;
    width: 30%;
    height: 80%;
    margin: 5rem auto;
    box-shadow: inset 8px 14px 25px -1px rgba(70, 72, 102, 0.75);
    -webkit-box-shadow: 8px 14px 25px -1px rgba(70, 72, 102, 0.75);
    -moz-box-shadow: 8px 14px 25px -1px rgba(70, 72, 102, 0.75);
    border-radius: 0 1rem 1rem 0;
    >.sidebar__container__top {
        height: 10%;
        display: flex;
        align-items: center;
        >.topLeft {
            flex: 0.9;
            >h1 {
                text-align: center;
                letter-spacing: 0.2rem;
                word-spacing: 0.4rem;
                color: ${colorScheme.tertiary_color};
            }
        }
        >.topRight {
            flex: 0.1;
        }
        >.close__icon {
            cursor: pointer;
            font-size: xx-large;
            color: ${colorScheme.tertiary_color};
        }
    }
    >.sidebar__container__middle {
        height: 80%;
        display: flex;
        padding: 2rem auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media (max-width:768px) {
        width: 70%;
        margin: 0;
        height: 100%;
    }
    >.sidebar__container__bottom {
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 0.2rem;
        >h4 {
            text-align: center;
            letter-spacing: 0.2rem;
            word-spacing: 0.2rem;
            width: 80%;
            color: ${colorScheme.secondary_color};
        }
    }
`;

//sidebar options styles
export const SidebarOptionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

export const SidebarOptionLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    background-color: ${colorScheme.primary_color};
    color: ${colorScheme.quaternary_color};
    width: 80%;
    height: 4rem;
    margin: 1rem;
    font-size: 2.2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
       opacity: 0.8;
    }
    border-radius: 1rem;
`;