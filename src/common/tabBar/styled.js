import styled from "styled-components";

export const TabBarWrapper = styled.div`
    width:100%;
    height:0.42rem;
    position:fixed;
    left:0;
    bottom:0;
    background:#fff;
    border-top:1px solid #f6f6f6;
    ul,li{
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    a{
       display:flex;
       width:100%;
       height:100%;
       flex-direction:column;
       justify-content:center;
       align-items:center;
    }
    ul li i{
        font-weight:800;
    }
    .active{
        color:#65a032;
    }
`