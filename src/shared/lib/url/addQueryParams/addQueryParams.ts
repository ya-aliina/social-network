/**
 * Generates a query string with the specified parameters.
 *
 * @param {OptionalRecord<string, string>} params - An object with key-value pairs where the key is the parameter name and the value is its value.
 * @returns {string} A query string starting with `?`, containing the passed parameters.
 *
 * @example
 * // Current URL: http://example.com
 * getQueryParams({ sort: 'name', order: 'asc' });
 * // Returns: "?sort=name&order=asc"
 */
export function getQueryParams(params: OptionalRecord<string, string>) {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });

    return `?${searchParams.toString()}`;
}

/**
 * Updates the browser URL with new parameters without reloading the page.
 *
 * @param {OptionalRecord<string, string>} params - An object with key-value pairs of parameters to add or update in the URL.
 *
 * @example
 * // Current URL: http://example.com
 * addQueryParams({ sort: 'name', order: 'asc' });
 * // The URL will change to: http://example.com?sort=name&order=asc
 */
export function addQueryParams(params: OptionalRecord<string, string>) {
    window.history.pushState(null, '', getQueryParams(params));
}
