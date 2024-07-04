import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
          // console.log("CLOSING")
        }
      }
      document.addEventListener("keydown", callback);

      // CleanUp function... always cleanup effects... else might become a memory issue eg 1000s eventlisterns
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
