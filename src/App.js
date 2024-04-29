import React from "react";
import TaskBar from "./components/TaskBar";
import Shortcuts from "./components/Shortcuts";

const App = () => {
  return (
    <>
      <div>
        <Shortcuts
          img="https://gnonbgjivjlnzejovgaw.supabase.co/storage/v1/object/sign/GeoOS/chrome.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHZW9PUy9jaHJvbWUucG5nIiwiaWF0IjoxNzExNzA0ODY2LCJleHAiOjIwMjcwNjQ4NjZ9.tWAsYHLn1rsPC2LIx3Gc7RCJpnoum8F0em3Mq5r0egQ&t=2024-03-29T09%3A34%3A24.561Z"
          name="Chrome"
          url="https://www.google.com"
        />
        <Shortcuts
          img="https://gnonbgjivjlnzejovgaw.supabase.co/storage/v1/object/sign/GeoOS/pc.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHZW9PUy9wYy5wbmciLCJpYXQiOjE3MTE3MDUxNTIsImV4cCI6MjAyNzA2NTE1Mn0.UEThQhkVjV4l0XuiU26evkDWVkLFFB4vfziCgcuJAyo&t=2024-03-29T09%3A39%3A10.400Z"
          name="This PC"
        />
        <Shortcuts
          img="https://gnonbgjivjlnzejovgaw.supabase.co/storage/v1/object/sign/GeoOS/github.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHZW9PUy9naXRodWIucG5nIiwiaWF0IjoxNzExNzIzOTU0LCJleHAiOjIwMjcwODM5NTR9.FclC1dXig-06RVpBTZi5T_CotqK06b6tXe9iB_IeOFs&t=2024-03-29T14%3A52%3A31.975Z"
          name="Github"
          url="https://www.github.com/GeorgeET15"
        />
        {/* <Shortcuts img="" name="Chrome" url="https://www.google.com" /> */}
      </div>
      <TaskBar />
    </>
  );
};

export default App;
