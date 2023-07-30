//https://stackoverflow.com/questions/60569255/material-ui-dark-theme-not-being-applied

const defaultTheme = ():any => ({
    palette: {
      mode:'light',
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    }
  });
export default defaultTheme;