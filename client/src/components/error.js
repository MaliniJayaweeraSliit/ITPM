import React from "react";

export default function error({ error }) {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    </div>
  );
}
