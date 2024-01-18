import React, { useState } from "react";
import ThumbnailComponent from "./components/ThumbnailComponent";
import TitleComponent from "./components/TitleComponent";
import DescriptionComponent from "./components/DescriptionComponent";

const App = () => {

  const [sttTitle, setSttTitle]= React.useState(true);
  const updateSttTitle = ()=> setSttTitle(!sttTitle)
  const [title, setTitle] = React.useState("What is Lorem Ipsum?")
  const updateTitle = (value)=> setTitle(value);

  const [sttDesc, setSttDesc]= React.useState(true);
  const updateSttDesc = ()=>setSttDesc(!sttDesc);
  const [desc, setDesc]= React.useState(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)
  const updateDesc = (value)=> setDesc(value);
  return (
    <>
<div id="main">
  <div className="content-item">
    <ThumbnailComponent/>
    <TitleComponent
    title={title}
    updateTitle={updateTitle}
    sttTitle={sttTitle}
    updateSttTitle = {updateSttTitle}
    />
    <DescriptionComponent
    desc={desc}
    sttDesc={sttDesc}
    updateDesc={updateDesc}
    updateSttDesc={updateSttDesc}
    />
  </div>
</div>
    </>
  )
}
export default App;
