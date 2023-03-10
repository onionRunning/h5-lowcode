export const tempCss = css => `
    body::-webkit-scrollbar {
        display: none;
    }
    * {
        -webkit-touch-callout: none;
        /*系统默认菜单被禁用*/
        -webkit-user-select: none;
        /*webkit浏览器*/
        -khtml-user-select: none;
        /*早期浏览器*/
        -moz-user-select: none;
        /*火狐*/
        -ms-user-select: none;
        /*IE10*/
        user-select: none;
        margin: 0;
        padding: 0;
    }

    ${css}
`
