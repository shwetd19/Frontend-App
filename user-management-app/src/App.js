import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './components/WelcomePage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import UserManagementPage from './components/UserManagementPage';


// Main App Component
function App() {
  const [currentView, setCurrentView] = useState('welcome');
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', username: 'johndoe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', username: 'janesmith', email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', username: 'mikejohnson', email: 'mike@example.com' },
    { id: 4, name: 'Sarah Wilson', username: 'sarahw', email: 'sarah@example.com' },
    { id: 5, name: 'David Brown', username: 'davidb', email: 'david@example.com' }
  ]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle navigation between pages
  const handleNavigate = (view) => {
    setCurrentView(view);
    setFormData({ name: '', username: '', email: '', password: '' });
  };

  // Handle sign in
  const handleSignIn = () => {
    // Simple validation - in real app, you'd validate against backend
    const user = users.find(u => u.username === formData.username);
    if (user) {
      setCurrentView('userManagement');
      setFormData({ name: '', username: '', email: '', password: '' });
    } else {
      alert('Invalid credentials. Try with existing usernames: johndoe, janesmith, mikejohnson, sarahw, davidb');
    }
  };

  // Handle sign up
  const handleSignUp = () => {
    // Check if username already exists
    const existingUser = users.find(u => u.username === formData.username);
    if (existingUser) {
      alert('Username already exists. Please choose a different username.');
      return;
    }

    const newUser = {
      id: Math.max(...users.map(u => u.id)) + 1,
      name: formData.name,
      username: formData.username,
      email: formData.email
    };
    
    setUsers([...users, newUser]);
    setCurrentView('userManagement');
    setFormData({ name: '', username: '', email: '', password: '' });
    alert('Account created successfully! Welcome to the dashboard.');
  };

  // Handle user selection for viewing
  const handleViewUser = (user) => {
    setSelectedUser(user);
    setIsEditing(false);
  };

  // Handle user editing
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setFormData({
      name: user.name,
      username: user.username,
      email: user.email,
      password: ''
    });
    setIsEditing(true);
  };

  // Handle user update
  const handleUpdateUser = () => {
    if (!formData.name || !formData.username || !formData.email) {
      alert('Please fill in all fields');
      return;
    }

    // Check if username is taken by another user
    const existingUser = users.find(u => u.username === formData.username && u.id !== selectedUser.id);
    if (existingUser) {
      alert('Username already exists. Please choose a different username.');
      return;
    }

    const updatedUsers = users.map(user =>
      user.id === selectedUser.id
        ? { ...user, name: formData.name, username: formData.username, email: formData.email }
        : user
    );
    
    setUsers(updatedUsers);
    setSelectedUser({ 
      ...selectedUser, 
      name: formData.name, 
      username: formData.username, 
      email: formData.email 
    });
    setIsEditing(false);
    setFormData({ name: '', username: '', email: '', password: '' });
    alert('User updated successfully!');
  };

  // Handle user deletion
  const handleDeleteUser = (userId) => {
    const userToDelete = users.find(u => u.id === userId);
    if (window.confirm(`Are you sure you want to delete ${userToDelete.name}? This action cannot be undone.`)) {
      setUsers(users.filter(user => user.id !== userId));
      if (selectedUser && selectedUser.id === userId) {
        setSelectedUser(null);
      }
      alert('User deleted successfully!');
    }
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setIsEditing(false);
    setFormData({ name: '', username: '', email: '', password: '' });
  };

  // Handle logout
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      setCurrentView('welcome');
      setSelectedUser(null);
      setIsEditing(false);
      setFormData({ name: '', username: '', email: '', password: '' });
    }
  };

  // Render current view
  const renderCurrentView = () => {
    switch (currentView) {
      case 'welcome':
        return <WelcomePage onNavigate={handleNavigate} />;
      case 'signin':
        return (
          <SignInPage 
            onNavigate={handleNavigate}
            onSignIn={handleSignIn}
            formData={formData}
            onInputChange={handleInputChange}
          />
        );
      case 'signup':
        return (
          <SignUpPage 
            onNavigate={handleNavigate}
            onSignUp={handleSignUp}
            formData={formData}
            onInputChange={handleInputChange}
          />
        );
      case 'userManagement':
        return (
          <UserManagementPage 
            users={users}
            selectedUser={selectedUser}
            isEditing={isEditing}
            formData={formData}
            onInputChange={handleInputChange}
            onViewUser={handleViewUser}
            onEditUser={handleEditUser}
            onUpdateUser={handleUpdateUser}
            onDeleteUser={handleDeleteUser}
            onLogout={handleLogout}
            onCancelEdit={handleCancelEdit}
          />
        );
      default:
        return <WelcomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="App">
      {renderCurrentView()}
    </div>
  );
}

export default App;