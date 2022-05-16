import React, { useState } from "react";
import Picker from "emoji-picker-react";

export const Emojis = () => {
  const [chosenEmoji, setChosenEmoji] = useState<any>([]);
  const dispatch: AppDispatch = useDispatch();

  const onEmojiClick = (event: any, emojiObject: any) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <EmojiContext.Provider value={chosenEmoji}>
      
    </EmojiContext.Provider>
  );
};
