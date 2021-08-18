import styled from "styled-components"
import { colorScheme } from "../../styles/colors";

export const ContactUsContainer = styled.div`
    background: rgb(37,39,77);
    background: linear-gradient(200deg, rgba(37,39,77,1) 0%, rgba(41,100,138,1) 51%, rgba(0,212,255,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 100%;
    >form {
        width: 60%;
        display: flex;
        flex-direction: column;
        @media (max-width: 768px) {
                width: 100%;
            }
        >label {
            width: 50%;
            margin: 1rem auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: larger;
            color: ${colorScheme.tertiary_color};
            @media (max-width: 768px) {
                width: 90%;
            }
        }
        >label>input,textarea {
            width: 12rem;
            border: none;
            outline: none;
            background-color: ${colorScheme.tertiary_color};
            color: ${colorScheme.primary_color};
            caret-color: ${colorScheme.quaternary_color};
        }
        >label>input {
            height: 2rem;
            padding: 0.5rem;
        }
        >label>textarea {
            height: 6rem;
            padding: 0.5rem;
        }
        >button {
            border: none;
            outline: none;
            margin: 1rem auto;
            width: 30%;
            padding: 1rem;
            border-radius: 1rem;
            background-color: ${colorScheme.primary_color};
            color: ${colorScheme.quaternary_color};
            font-family: 'Lobster', cursive;
            letter-spacing: 0.2rem;
            font-size: larger;
            cursor: pointer;
        }
    }
`;