import axios from "axios";
import Cookies from "js-cookie";
import { createContext } from "react";
import toast from "react-hot-toast";

// function getData(
//   token: string,
//   methods: string,
//   url: string,
//   values?: string,
// ) {
//   if (token) {
//     const req = new XMLHttpRequest();
//     req.open(methods, url, true);
//     req.onload = () => {
//       if (req.readyState === XMLHttpRequest.DONE) {
//         if (req.status === 200) {
//           // Todo: implement parsing data
//           let response = JSON.parse(req.response.trim());
//           const { bodyMessage, status, token } = response;
//           console.log(response);
//         }
//       }
//     };
//     req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     req.setRequestHeader("Content-Type", "multipart/form-data");

//     req.send(values);
//   }
// }

function BasicRequest(methods: string, url: string, values?: string) {
  const req = new XMLHttpRequest();
  req.open(methods, url, true);
  req.onload = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        // Todo: implement parsing data
        let data = req.response.trim();

        console.log(data);
      }
    }
  };
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.setRequestHeader("Content-Type", "multipart/form-data");

  req.send(values);
}

export { BasicRequest }