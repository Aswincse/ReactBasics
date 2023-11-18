// Import necessary Material-UI components
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

const LoginButton = () => {
  // State for managing the dialog open/close and input values
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle opening the dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Function to handle login
  const handleLogin = () => {
    // Perform login logic here
    // For demonstration purposes, just closing the dialog
    handleClose();
  };

  return (
    <div>
      {/* Login Button */}
      <Button
        variant="contained"
        color="primary"
        data-testid="login"
        onClick={handleOpen}
      >
        Login
      </Button>

      {/* Login Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          {/* Username TextField */}
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            data-testid="username"
            fullWidth
            margin="normal"
          />

          {/* Password TextField */}
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password"
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          {/* Cancel Button */}
          <Button onClick={handleClose} data-testid="cancel">
            Cancel
          </Button>

          {/* Login Button */}
          <Button onClick={handleLogin} data-testid="dia-login" color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginButton;
