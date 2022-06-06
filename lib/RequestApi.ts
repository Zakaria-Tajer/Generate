import axios from "axios";
import Cookies from "js-cookie";
import { createContext } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";

function sendEmails(methods: string, url: string, values?: string) {
  const req = new XMLHttpRequest();
  req.open(methods, url, true);
  req.onload = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        // Todo: implement parsing data
        let response = JSON.parse(req.response.trim());
        console.log(response);
      }
    }
  };
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.setRequestHeader("Content-Type", "multipart/form-data");

  req.send(values);
}

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
function SuperUsers(methods: string, url: string, values: string) {
  const req = new XMLHttpRequest();
  req.open(methods, url, true);
  req.onload = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        // Todo: implement parsing data
        let data = JSON.parse(req.response.trim());
        const {
          bodyMessage: { Message, role },
        } = data;

        if (Message == "Success") {
          toast.success("Created");
        } else {
          toast.error(Message);
        }
        console.log(data);
      }
    }
  };
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.setRequestHeader("Content-Type", "multipart/form-data");

  req.send(values);
}
function createProject(methods: string, url: string, values: string) {
  const req = new XMLHttpRequest();
  req.open(methods, url, true);
  req.onload = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        let data = JSON.parse(req.response.trim());
        console.log(data);
        const { bodyMessage } = data;
        if (bodyMessage == "success") {
        } else {
          toast.error(bodyMessage);
        }
      }
    }
  };
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.setRequestHeader("Content-Type", "multipart/form-data");

  req.send(values);
}


export { BasicRequest, sendEmails, SuperUsers, createProject };
