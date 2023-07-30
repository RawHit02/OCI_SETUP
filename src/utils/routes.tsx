import { useNavigate } from "react-router-dom";

class Routes {
  navigate: any;
  searchParams: any;

  constructor(useNavigateReact: any, useSearchParamsReact?: any) {
    //import { useNavigate } from "react-router-dom";;
    this.navigate = useNavigateReact;
    if (useSearchParamsReact != undefined) {
      var [search] = useSearchParamsReact;
      this.searchParams = search;
    }
  }

  getQueryString(param: any) {
    return this.searchParams.get(param);
  }

  goToSplash = () => {
    this.navigate("/splash");
  };

  goToDashboard = () => {
    this.navigate("/dashboard");
    //this.navigate({pathname:"/dashboard",search: '?sort=date&order=newest'});
  };
  
  goToTest = () => {
      this.navigate("/test");
    //this.navigate({pathname:"/dashboard",search: '?sort=date&order=newest'});
  };
  goToShare = () => 
  {
     let share="shareApp";
     if(window.location.href.indexOf("?")!==-1){
      window.location.href = window.location.href+"&"+share;
     }else{
      window.location.href = window.location.href+"?"+share;
     } 
  };

  /*
  goToQuestionByYear = (year: string, page: number) => {
    let params:string = "?_id=" + year + "&_p=" + page + "&_w=y";
    params+=(page % 5 == 0)?'&__ad=rewarded':'';
    this.navigate({
      pathname: "/question",
      //search: '?' + queryString,
      search: params,
    });
  };
   */
  goToSignUp = () => {
    this.navigate.push("/sign-up");
  };

  goToSignIn = () => {
    this.navigate.push("/sign-in");
  };
}
export default Routes;
