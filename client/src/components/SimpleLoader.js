import React from "react";

export default function SimpleLoader() {
  return (
    <div
      className="animate-spin inline-block w-6 h-6 border-[3px] border-seagull-300 border-t-transparent text-blue-600 rounded-full"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
