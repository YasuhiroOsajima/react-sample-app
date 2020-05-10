import { useEffect } from "react";

// Custom Hooks to put together same logic in some React components.
function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
}

export default useDocumentTitle;
