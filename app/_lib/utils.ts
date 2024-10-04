/**
 * Storing CREATE_NOTE MUTATION if APP is offline
 * @TODO: Storing files/images to localstorage not possible
 *
 * @param mutationVariables
 */
export const storeOfflineMutation = ({ variables, key }) => {
  try {
    // Choose a storage mechanism (e.g., localStorage, IndexedDB)
    const storedMutations = JSON.parse(localStorage.getItem(key)!) || [];
    storedMutations.push(variables);
    localStorage.setItem(key, JSON.stringify(storedMutations));

    console.log("Local storage set with", { variables });
  } catch (err) {
    console.error("Error storing offline mutation:", err);
    // Handle storage errors gracefully (e.g., quota exceeded)
  }
};

/**
 *
 * @param { createApiCall: Method, refetch: Method }
 */
export const sendOfflineMutations = async ({ createApiCall, refetch, key }) => {
  try {
    // Retrieve stored mutations from chosen storage
    const storedMutations = JSON.parse(localStorage.getItem(key) || "[]");

    if (navigator.onLine && storedMutations.length > 0) {
      const updatedMutations: any[] = [];

      for (const mutation of storedMutations) {
        try {
          const { data } = await createApiCall({ variables: mutation });
          console.log("Sent offline mutation successfully:", data);
        } catch (err) {
          console.error("Error sending offline mutation:", err);
          updatedMutations.push(mutation);
        }
      }

      // Update storage with pending mutations
      localStorage.setItem(key, JSON.stringify(updatedMutations));

      // Refetch if online
      refetch();
    }
  } catch (err) {
    console.error("Error processing offline mutations:", err);
    // Implement retry logic or handle failure
  }
};

export const isJsonString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

// extract text from html string
export const extractTextFromHTMLString = (htmlString) => {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(htmlString, "text/html");
  return htmlDoc.body.textContent || "";
};
