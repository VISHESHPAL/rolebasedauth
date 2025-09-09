export const userDashboard = (req, res) => {
  res.json({
    message: `Welcome to the User Dashboard, ${req.user.name}!`,
    role: req.user.role
  });
};
