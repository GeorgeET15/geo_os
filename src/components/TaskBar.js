import React from "react";
import TaskShort from "./TaskShort";

const TaskBar = () => {
  return (
    <footer className="footer">
      <div className="app-container">
        <TaskShort
          img="https://gnonbgjivjlnzejovgaw.supabase.co/storage/v1/object/sign/GeoOS/chrome.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHZW9PUy9jaHJvbWUucG5nIiwiaWF0IjoxNzExNzA0ODY2LCJleHAiOjIwMjcwNjQ4NjZ9.tWAsYHLn1rsPC2LIx3Gc7RCJpnoum8F0em3Mq5r0egQ&t=2024-03-29T09%3A34%3A24.561Z"
          name="Chrome"
          url="https://www.google.com"
        />
        <TaskShort
          img="https://gnonbgjivjlnzejovgaw.supabase.co/storage/v1/object/sign/GeoOS/github.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHZW9PUy9naXRodWIucG5nIiwiaWF0IjoxNzExNzIzOTU0LCJleHAiOjIwMjcwODM5NTR9.FclC1dXig-06RVpBTZi5T_CotqK06b6tXe9iB_IeOFs&t=2024-03-29T14%3A52%3A31.975Z"
          name="Github"
          url="https://www.github.com/GeorgeET15"
        />
        <TaskShort
          img="https://gnonbgjivjlnzejovgaw.supabase.co/storage/v1/object/sign/GeoOS/spotify.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHZW9PUy9zcG90aWZ5LnBuZyIsImlhdCI6MTcxMTc2MzI1MywiZXhwIjoyMDI3MTIzMjUzfQ.b7wCnfQmLxmINQ7arc1bO8m2E2gMi5BbeLsGGxnMfUY&t=2024-03-30T01%3A47%3A34.051Z"
          name="Spotify"
          url="https://open.spotify.com/"
        />
        <TaskShort
          img="https://gnonbgjivjlnzejovgaw.supabase.co/storage/v1/object/sign/GeoOS/vscode.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHZW9PUy92c2NvZGUucG5nIiwiaWF0IjoxNzExNzYzODEwLCJleHAiOjIwMjcxMjM4MTB9.5LzRb_9i1BkuOKPf75c_aHnAevhas2lOffqKt1NUOnM&t=2024-03-30T01%3A56%3A51.090Z"
          name="Visual Studio Code"
          url="https://vscode.dev/"
        />
        <TaskShort
          img="https://gnonbgjivjlnzejovgaw.supabase.co/storage/v1/object/sign/GeoOS/cmd.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHZW9PUy9jbWQucG5nIiwiaWF0IjoxNzExNzY0ODM5LCJleHAiOjIwMjcxMjQ4Mzl9.sC3cyNVBRhleGlEDOp9pQOPSuuKoyh-GmfmGKg7srWI&t=2024-03-30T02%3A14%3A00.850Z"
          name="Visual Studio Code"
          url="https://vscode.dev/"
        />
      </div>
    </footer>
  );
};

export default TaskBar;
