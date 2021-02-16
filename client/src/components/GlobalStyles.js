import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
    :root {
        --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
    
    * {
        box-sizing: border-box;
    }
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.50s linear;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: 0;
        font-family: 'Lato', sans-serif;
    }
    
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
        border-bottom: 2px solid #bbb;
        user-select: none;
    }

    .theme {
        position: absolute;
        top: 13px;
        right: 0px;
    }

    .container {
        margin: 30px auto;
        width: 350px;
    }
    h1 {
        letter-spacing: 1px;
        margin: 0;
    }
    
    h3 {
        border-bottom: 2px solid #bbb;
        padding-bottom: 10px;
        margin: 40px 0 10px;
    }
    
    h4 {
        margin: 0;
        text-transform: uppercase;
    }
    
    .inc-exp-container {
        background-color: ${({ theme }) => theme.toggleBorder};
        border: 1px solid ${({ theme }) => theme.body}; 
        box-shadow: ${({ theme }) => theme.shadow};
        padding: 10px;
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
        border-radius: 10px;
    }
    
    .inc-exp-container > div {
        flex: 1;
        text-align: center;
    }
    
    .inc-exp-container > div:first-of-type {
        border-right: 2px solid #dedede;
        display: grid;
    }
    
    
    .money {
        font-size: 20px;
        letter-spacing: 1px;
        margin: 5px 0;
    }
    
    .money.plus {
        color: #2ecc71;
        border-bottom: 2px solid #dedede
    }
    
    .money.minus {
        color: #bb2717;
    }
    
    label {
        display: inline-block;
        margin: 10px 0;
    }
    
    input[type='text'],
    input[type='number'] {
        border: 1px solid #dedede;
        border-radius: 4px;
        display: block;
        font-size: 13px;
        padding: 8px;
        width: 100%;
        margin-bottom: 2px;
        outline: none;
    }
    
    .btn {
        cursor: pointer;
        background-color: ${({ theme }) => theme.background};
        box-shadow: ${({ theme }) => theme.shadow};
        color: ${({ theme }) => theme.text};
        border: 1px solid;
        border-radius: 6px;
        display: block;
        font-size: 16px;
        margin: 10px 0 30px;
        padding: 10px;
        width: 100%;
    }
    
    .btn:focus,
    .delete-btn:focus {
        outline: 0;
    }
    
    .list {
        list-style-type: none;
        padding: 0;
        margin-bottom: 40px;
    }
    
    .list li {
        background-color: ${({ theme }) => theme.toggleBorder};
        box-shadow: ${({ theme }) => theme.shadow};
        color: ${({ theme }) => theme.text};
        display: flex;
        justify-content: space-between;
        position: relative;
        padding: 10px;
        margin: 6px 0;
        border-radius: 6px;
    }
    
    .list li.plus {
        border-right: 3px solid #2ecc71;
    }
    
    .list li.minus {
        border-right: 3px solid #c0392b;
    }
    
    .delete-btn {
        cursor: pointer;
        background-color: #e74c3c;
        border: 0;
        color: #fff;
        font-size: 12px;
        line-height: 20px;
        padding: 2px 8px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-100%, -50%);
        opacity: 0;
        transition: opacity 0.3s ease;
        border-radius: 4px;
    }
    
    .list li:hover .delete-btn {
        opacity: 1;
    }

    `