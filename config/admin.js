module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4284a9cfdf724c162d18ceb763978ced'),
  },
});
