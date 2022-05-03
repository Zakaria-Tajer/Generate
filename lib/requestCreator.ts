import Cookies from "js-cookie";
import toast from "react-hot-toast";


function requestCreator(
  methods: string,
  url: string,
  values?: string,
  RedirectedUrl?: string,
  router?: any,

) {
  const req = new XMLHttpRequest();
  req.open(methods, url, true);
  req.onload = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        // Todo: implement parsing data
        let datas = JSON.parse(req.response.trim())
        const { bodyMessage, status,token: { token }} = datas
        if(status == '201' && bodyMessage == 'success'){
          Cookies.set('token',token)
          router.push(RedirectedUrl)
        }else {
          toast.error(datas)
        }
      }
    }
  };
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.setRequestHeader("Content-Type", "multipart/form-data")

  req.send(values);
}
export { requestCreator };
// Todo: implement parsing data
// Todo: getData from function
