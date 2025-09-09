
export const managerDashboard = (req, res) => {
  res.json({
    message: `Welcome to the Manager Dashboard, ${req.user.name}!`,
    role: req.user.role
  });
};
