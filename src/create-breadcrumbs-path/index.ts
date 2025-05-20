import { CreateBreadcrumbsFn } from './types';

/**
 * @task Create Breadcrumbs Path
 * @description Convert an array of pathname strings into an array of breadcrumb objects. Each breadcrumb contains the original path and a label that is based on the last segment of the path.
 * - If the path is exactly `/`, use 'Home' as the label.
 * - Otherwise, trim slashes and capitalize the last segment of the path.
 *
 * @example
 * Input:
 * ['/home', '/home/products', '/home/products/electronics']
 * Output:
 * [
 *   { path: '/home', label: 'Home' },
 *   { path: '/home/products', label: 'Products' },
 *   { path: '/home/products/electronics', label: 'Electronics' }
 * ]
 */
export const createBreadcrumbs: CreateBreadcrumbsFn = (paths) => {
  return paths.map((path) => {
    if (path === '/') {
      return { path: '/', label: 'Home' };
    }

    const endpoint = path.split('/').filter(Boolean);
    const lastEndpoint = endpoint[endpoint.length - 1];

    const label = lastEndpoint.charAt(0).toUpperCase() + lastEndpoint.slice(1);

    return {
      path,
      label,
    };
  });
};
createBreadcrumbs(['/home', '/home/products/', '/home/products/electronics']);
