/* Your task is to create userlinks for the url, you will be given a username and must return a valid link.

Example
generate_link('matt c')
http://www.codewars.com/users/matt%20c
 */

//* My solution:
function generateLink(user) {
  const userLink = encodeURIComponent(user);
  return `http://www.codewars.com/users/${userLink}`;
}
