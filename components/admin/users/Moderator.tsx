import React, { useState } from "react";
import { SuperUsers } from "lib/RequestApi";
import { nanoid } from "nanoid";

export const Moderator = () => {
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const submit = () => {
    const unique_id = nanoid(10);

    SuperUsers(
      "POST",
      `${process.env.NEXT_PUBLIC_API_URL_Generate}api/SuperUsers`,
      `FirstName=${fname}&LastName=${lname}&email=${email}&password=${password}&unique_id=${unique_id}&role=${"Moderator"}`
    );
  };
  return (
    <div className=" h-full">
      <form className="mt-10" onSubmit={e => e.preventDefault()}>
        <div className="flex w-3/4 mx-auto space-x-5 items-center justify-center">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setFname(e.target.value)}
            className="w-64 rounded py-2 px-5 font-poppins outline-none border-2 focus:border-[#364F6B]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-64 rounded py-2 px-5 font-poppins outline-none border-2 focus:border-[#364F6B]"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="flex w-3/4 mx-auto py-2 space-y-3 flex-col items-center justify-center">
          <input
            type="email"
            placeholder="Email"
            className="w-[33.5rem] rounded py-2 px-5 font-poppins outline-none border-2 focus:border-[#364F6B]"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[33.5rem] rounded py-2 px-5 font-poppins outline-none border-2 focus:border-[#364F6B]"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-[#364F6B] mr-auto ml-4 text-white w-44 py-3 rounded-md font-poppins"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
