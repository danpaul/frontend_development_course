import React from "react";
import { AuthProvider } from "./AuthContext";
import Status from "./Status";
import AuthButtons from "./AuthButtons";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Auth Context Example</h1>
        <Status />
        <AuthButtons />
      </div>
    </AuthProvider>
  );
};

export default App;
