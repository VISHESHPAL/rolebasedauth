export const adminDashboard = (req, res) => {
  res.json({
    message: `Welcome to the Admin Dashboard, ${req.user.name}!`,
    role: req.user.role
  });
};
