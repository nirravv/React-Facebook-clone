import React from "react";
import { useStateValue } from "../DataLayer/StateProvider";
import "../style/StoryReel.css";
import Story from "./Story";

function StoryReel() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/flagged/photo-1622311584622-81990bfc12fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        profileSrc={user.photoURL}
        title={user.displayName}
      />
      <Story
        image="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        profileSrc="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        title="Madara Uchiha"
      />
      <Story
        image="https://images.unsplash.com/photo-1590796583326-afd3bb20d22d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        profileSrc="https://images.unsplash.com/photo-1622240894066-f68cec9a1e5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        title="Naruto"
      />
      <Story
        image="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
        profileSrc="https://images.unsplash.com/photo-1622023986986-9bd9e8ab928e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        title="Gojou"
      />
      <Story
        image="https://images.unsplash.com/photo-1609687532637-967130b8f32f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        profileSrc="https://images.unsplash.com/photo-1622164888744-b92f3247d76c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        title="Itadori"
      />
    </div>
  );
}

export default StoryReel;
