export const lightTheme = {
    body:"#484D6A",
    text:"#111319",
    fontFamily:"'Source Sans Pro', sans-serif",
    bodyRgba : "231, 182, 205",
    textRgba:"72, 77, 106",

}

export const DarkTheme = {
    body:"#231942",
    text:"#605287",
    icon: "#E0E1DD",
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