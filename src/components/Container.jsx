import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./TextArea";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");
  const stats = {
    numberOfCharacters: text.length,
    facebookCharacters: FACEBOOK_MAX_CHARACTERS - text.length,
    instagramCharacters: INSTAGRAM_MAX_CHARACTERS - text.length,
    numberOfWords: text.split(" ").filter((word) => word !== "").length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
