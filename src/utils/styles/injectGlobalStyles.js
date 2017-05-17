import {injectGlobal} from 'styled-components'


export default function() {
  return injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    
    * {
      font-family: 'Roboto', sans-serif;
    }
    
    html,
    body {
      margin: 0;
     }
     
    html {
      height: 100vh;
    }
    
    body,
    #root {
      height: 100%;
    } 
  `
}