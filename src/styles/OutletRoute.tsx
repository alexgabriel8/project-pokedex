import styled from "styled-components";

const OutletRoute = styled.div`
    position: relative;
    overflow-y: scroll;
    width: 100%;
    padding: 10px;
    text-align: center;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
    
    scrollbar-width: none;
    -ms-overflow-style: none;
    &&::-webkit-scrollbar{
        display: none;
    }
`

export { OutletRoute }