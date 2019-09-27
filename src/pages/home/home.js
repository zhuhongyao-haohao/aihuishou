import home from "styled-components";

export const HomeWrapper = home.div`
    #wrapper{
        height:100%;
    }
    .head{
        position: fixed;
        z-index: 10;
        top: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 100%;
        max-width: 750px;
        min-width: 320px;
        overflow: hidden;
        height: 0.44rem;
        line-height: 0.44rem;
        background: red;
    }
`