import styled from "styled-components"
import { colorScheme } from "../../styles/colors";

export const MainContainer = styled.div`
    overflow: auto;
    width: 100%;
    margin: 0rem auto;
`;

export const TopSection = styled.div`
    height: 90vh;
    background: rgb(37,39,77);
    background: linear-gradient(200deg, rgba(37,39,77,1) 0%, rgba(41,100,138,1) 51%, rgba(0,212,255,1) 100%);
    display: flex;
    >div:nth-child(1){
        flex:0.5;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${colorScheme.tertiary_color};
        letter-spacing: 0.2rem;
        word-spacing: 0.4rem;
        >h1 {
            width: 60%;
            font-size: 4rem;
            >span:nth-child(1){
                color: ${colorScheme.secondary_color};
            }
            >span:nth-child(2){
                color: ${colorScheme.secondary_color};
            }
        }
    }
    >div:nth-child(2){
        flex:0.5;
        display: flex;
        justify-content: center;
        align-items: center;
        //div for monitor
        >div {
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        img {
            width: 100%;
        }
        .monitor {
            width: 90%;
            height: 300px;
            overflow-y: auto;
            border: solid 1em ${colorScheme.primary_color};
            border-radius: 1rem;
        }
        .monitor::-webkit-scrollbar {
            width: 0.2rem;
        }
        .monitor::-webkit-scrollbar-thumb {
            background-color: ${colorScheme.tertiary_color};
        }
        .stand__vertical {
            width: 3rem;
            height: 1.5rem;
            background: ${colorScheme.primary_color};
        }
        .stand__horizontal {
            width: 8rem;
            height: 1rem;
            background: ${colorScheme.primary_color};
            border-top-right-radius: 1rem;
            border-top-left-radius: 1rem;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        >div:nth-child(1) {
            flex: 0.4;
            text-align: center;
            align-items: flex-end;
            >h1 {
                width: 100%;
                font-size: 2rem;
            }
        }
        >div:nth-child(2) {
            flex: 0.6;
            .monitor {
                width: 98%;
                height: 200px;
                margin: auto;
                overflow-y:auto;
                border-radius: 0.5rem;
            }
            .stand__vertical {
                width: 3rem;
                height: 1rem;
                background: ${colorScheme.primary_color};
            }
            .stand__horizontal {
                width: 6rem;
                height: 0.5rem;
                background: ${colorScheme.primary_color};
                border-top-right-radius: 1rem;
                border-top-left-radius: 1rem;
            }
        }
    }
`;