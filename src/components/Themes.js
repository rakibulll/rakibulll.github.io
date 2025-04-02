export const lightTheme = {
    body:"#171E18",
    text:"#050800",
    fontFamily:"'Source Sans Pro', sans-serif",
    bodyRgba : "231, 182, 205",
    textRgba:"23, 30, 24",

}

export const DarkTheme = {
    body:"#D8DEE2",
    text:"#605287",
    icon: "#A29881",
    fontFamily:"'Source Sans Pro', sans-serif",
    textRgba : "252, 246, 244",
    bodyRgba:"0,0,0",

}

// You can also use these breakpoints after importing it and use it as breakpoints.sm
export const breakpoints = {
    sm: 20,//em
    md: 30,
    lg: 45,
    xl: 60,
    xxl:75,
  }
  
  export const mediaQueries = key => {
    return style => `@media (max-width: ${key}em) { ${style} }`
  }