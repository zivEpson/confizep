//@flow
import queryString from "query-string";

/**
 * @file helper methods when working with Forms
 * @module FormUtils
 */

/**
 * parse the search query and return
 */
export const getModelMode = (query: string | RegExp) => {
  const mode = queryString.parse(query);
  return mode["mode"];
};
