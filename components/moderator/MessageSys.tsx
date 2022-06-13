import { Text } from "@/pages/moderator/chat";

export const MessageSys = ({ ModeratorText}: Text) => {
  
  return (
    <>
      {/* <div className="w-80 py-4 rounded-tl-3xl  bg-gray-600 pl-4 text-white font-poppins ml-2 rounded-br-3xl">{ClientText}</div> */}
      <div className="w-80 py-4 rounded-tl-3xl bg-blue-600 text-white font-poppins ml-auto mr-2 rounded-br-3xl pl-4 mt-2 mb-5" >
        {ModeratorText}
      </div>
    </>
  );
};
