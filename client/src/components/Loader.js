import React, { useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import "./Loader.css"; // import your custom CSS file

function Loader() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="loader-container">
      <SyncLoader
        color="#000"
        loading={loading}
        cssOverride=""
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
