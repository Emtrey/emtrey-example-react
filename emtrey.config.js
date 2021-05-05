module.exports = {
  login: {
    url: 'login',
    user: 'max@horizontwolabs.com',
    password: 'password',
  },
  routes: {
    '*': {
      auth: true,
    },
    '/': {},
    '/components.html': {},
    '/project.html': {}
  },
};
