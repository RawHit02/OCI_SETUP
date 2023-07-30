import axios from "axios";
const ax = axios;
ax.interceptors.request.use((req) => {
  req.baseURL = process.env.NEXT_PUBLIC_API_URL;
  req.headers["time"] = { startTime: new Date() };
  req.headers["authorization"] = "nothing-define-yet";
  req.headers["content-type"] = "multipart/form-data";
  return req;
});

ax.interceptors.response.use((res) => {
  try {
    //let logingExpired = res.data.data.body.error.code; //403
    //if (logingExpired != "undefined" && logingExpired == "403") {
    //    localStorage.clear();
    // }
  } catch (error) {
    //console.log(error);
  }
  return res;
});
export default ax;
