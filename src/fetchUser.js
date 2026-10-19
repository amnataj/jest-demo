// The fetch function is passed in so tests can replace it with a mock.
async function fetchUser(id, fetchFn = fetch) {
  const response = await fetchFn(`https://api.example.com/users/${id}`);
  if (!response.ok) {
    throw new Error('User not found');
  }
  return response.json();
}

module.exports = { fetchUser };
