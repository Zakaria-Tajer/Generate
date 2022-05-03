import axios from "axios";
import Cookies from 'js-cookie'
import toast from "react-hot-toast";

function RegisterApi(files:any,firstName:string,LastName:string,email:string,password:string,confirmationPassword:string,router:any){
    let formdata = new FormData();
        formdata.append("file", files);
        formdata.append("firstName", firstName);
        formdata.append("LastName", LastName);
        formdata.append("email", email);
        formdata.append("password", password);
        formdata.append("confirmationPassword", confirmationPassword);

        axios.post("http://localhost:8000/user", formdata, {}).then((res) => {
          const { data } = res;
          console.log(JSON.parse(data));
          if(data.bodyMessage == 'success'){
              Cookies.set('token', data.token)
              router.push('/client')
          }else {
            toast.error(data.bodyMessage)
          }
        });
}

export {RegisterApi}