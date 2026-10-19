const { fetchUser } = require('./fetchUser');

describe('fetchUser', () => {
  test('returns user data when the request succeeds', async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: 1, name: 'Ali' }),
    });

    const user = await fetchUser(1, mockFetch);

    expect(user).toEqual({ id: 1, name: 'Ali' });
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('https://api.example.com/users/1');
  });

  test('throws when the user is not found', async () => {
    const mockFetch = jest.fn().mockResolvedValue({ ok: false });

    await expect(fetchUser(99, mockFetch)).rejects.toThrow('User not found');
  });
});
