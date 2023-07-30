import defaultTheme from "@/theme/DefaultTheme";
import darkTheme from "@/theme/DarkTheme";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
export default class AppHelper 
{
    
    static setAppLangague = (lang: string): any => {
        localStorage.setItem("App.lang", lang);
    }
    static getAppLangauge = (): any => {
        let lang: any = "en";
        if (typeof window !== 'undefined') {
            if (localStorage.getItem("App.lang") != null) {
                lang = localStorage.getItem("App.lang");
            }else{
                lang =  "en"; //default
            }
        }
        return lang;
    }

    static setTheme = (bool: boolean): any => {
        if (bool) {
            localStorage.setItem("App.theme", "dark");
        } else {
            localStorage.setItem("App.theme", "light");
        }
        window.dispatchEvent(new Event("onChangeTheme"));
    }

    static getTheme = (): any => {
        let theme: any = "light";
        if (typeof window !== 'undefined') {
            if (localStorage.getItem("App.theme") != null) {
                theme = localStorage.getItem("App.theme");
            }
        }
        return theme;
    }

    static getSelectedTheme = ():any =>{
        if (typeof window !== 'undefined') {
            if (localStorage.getItem("App.theme") != null) {
                if(localStorage.getItem("App.theme")=="dark"){
                    return createTheme(darkTheme());      
                }
            }
        }
        return createTheme(defaultTheme());
    }
     
    //static print = (msg:any):any =>{
    //    console.log(msg);
    //}

}