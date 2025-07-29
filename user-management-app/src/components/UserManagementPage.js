import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// User Management Page Component
function UserManagementPage({ users, selectedUser, isEditing, formData, onInputChange, onViewUser, onEditUser, onUpdateUser, onDeleteUser, onLogout, onCancelEdit }) {
  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg shadow-sm" style={{ background: 'linear-gradient(45deg, #667eea, #764ba2)' }}>
        <div className="container-fluid">
          <span className="navbar-brand text-white d-flex align-items-center">
            <div className="me-2 p-2 rounded shadow" style={{ 
              backgroundColor: 'white', 
              color: '#667eea', 
              fontSize: '16px', 
              fontWeight: 'bold',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              👥
            </div>
            <span className="fs-5 fw-bold">User Management Dashboard</span>
          </span>
          <div className="d-flex align-items-center">
            <span className="text-white me-3 fw-semibold">Welcome, Admin!</span>
            <button 
              className="btn btn-outline-light fw-semibold"
              style={{ 
                borderRadius: '20px',
                padding: '8px 20px',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease'
              }}
              onClick={onLogout}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-1px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="row flex-grow-1">
        {/* Users List Sidebar */}
        <div className="col-lg-3 col-md-4 bg-light border-end p-0">
          <div className="p-3 border-bottom bg-white shadow-sm">
            <h6 className="mb-0 text-primary fw-bold">
              Users ({users.length})
            </h6>
          </div>
          <div className="p-2" style={{ maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}>
            {users.map(user => (
              <div key={user.id} className={`card mb-2 border-0 shadow-sm ${selectedUser?.id === user.id ? 'border-primary border-2' : ''}`} style={{ borderRadius: '12px' }}>
                <div className="card-body p-3">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className="flex-grow-1">
                      <h6 className="card-title mb-1 text-primary fw-semibold" style={{ fontSize: '0.95rem' }}>{user.name}</h6>
                      <p className="card-text text-muted small mb-1">@{user.username}</p>
                      <p className="card-text text-muted small mb-0" style={{ fontSize: '0.8rem' }}>{user.email}</p>
                    </div>
                    <span className="badge bg-primary rounded-pill" style={{ fontSize: '0.7rem' }}>{user.id}</span>
                  </div>
                  <div className="btn-group w-100" role="group" style={{ gap: '2px' }}>
                    <button 
                      className="btn btn-outline-primary btn-sm fw-semibold"
                      style={{ 
                        borderRadius: '8px',
                        fontSize: '0.75rem',
                        padding: '4px 8px',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => onViewUser(user)}
                      title="View Details"
                      onMouseOver={(e) => e.target.style.transform = 'translateY(-1px)'}
                      onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                      View
                    </button>
                    <button 
                      className="btn btn-outline-warning btn-sm fw-semibold"
                      style={{ 
                        borderRadius: '8px',
                        fontSize: '0.75rem',
                        padding: '4px 8px',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => onEditUser(user)}
                      title="Edit User"
                      onMouseOver={(e) => e.target.style.transform = 'translateY(-1px)'}
                      onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                      Edit
                    </button>
                    <button 
                      className="btn btn-outline-danger btn-sm fw-semibold"
                      style={{ 
                        borderRadius: '8px',
                        fontSize: '0.75rem',
                        padding: '4px 8px',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => onDeleteUser(user.id)}
                      title="Delete User"
                      onMouseOver={(e) => e.target.style.transform = 'translateY(-1px)'}
                      onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-lg-9 col-md-8 p-3" style={{ backgroundColor: '#f8f9fa' }}>
          {!selectedUser && !isEditing && (
            <div className="text-center mt-5">
              <div className="mb-4">
                <div className="text-muted" style={{ fontSize: '4rem' }}>👤</div>
              </div>
              <h4 className="text-muted fw-semibold">Select a user to view details</h4>
              <p className="text-muted" style={{ fontSize: '0.95rem' }}>Click on the "View" button to see user information or "Edit" to modify user details.</p>
            </div>
          )}

          {selectedUser && !isEditing && (
            <div className="card border-0 shadow" style={{ borderRadius: '15px' }}>
              <div className="card-header" style={{ 
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                borderRadius: '15px 15px 0 0'
              }}>
                <h5 className="card-title mb-0 fw-bold">
                  User Profile Details
                </h5>
              </div>
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-md-8">
                    <div className="row mb-3">
                      <div className="col-sm-4">
                        <strong className="text-muted fw-semibold" style={{ fontSize: '0.9rem' }}>Full Name:</strong>
                      </div>
                      <div className="col-sm-8">
                        <span className="text-dark fw-semibold">{selectedUser.name}</span>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-4">
                        <strong className="text-muted fw-semibold" style={{ fontSize: '0.9rem' }}>Username:</strong>
                      </div>
                      <div className="col-sm-8">
                        <span className="text-dark fw-semibold">@{selectedUser.username}</span>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-4">
                        <strong className="text-muted fw-semibold" style={{ fontSize: '0.9rem' }}>Email:</strong>
                      </div>
                      <div className="col-sm-8">
                        <span className="text-dark fw-semibold">{selectedUser.email}</span>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-4">
                        <strong className="text-muted fw-semibold" style={{ fontSize: '0.9rem' }}>User ID:</strong>
                      </div>
                      <div className="col-sm-8">
                        <span className="badge bg-secondary fw-semibold">{selectedUser.id}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="mb-3">
                      <div className="text-primary" style={{ fontSize: '4rem' }}>👤</div>
                    </div>
                    <p className="text-muted small fw-semibold">Profile Avatar</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex gap-2">
                  <button 
                    className="btn btn-warning fw-semibold"
                    style={{ 
                      borderRadius: '10px',
                      padding: '8px 20px',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => onEditUser(selectedUser)}
                    onMouseOver={(e) => e.target.style.transform = 'translateY(-1px)'}
                    onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    Edit User
                  </button>
                  <button 
                    className="btn btn-danger fw-semibold"
                    style={{ 
                      borderRadius: '10px',
                      padding: '8px 20px',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => onDeleteUser(selectedUser.id)}
                    onMouseOver={(e) => e.target.style.transform = 'translateY(-1px)'}
                    onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    Delete User
                  </button>
                </div>
              </div>
            </div>
          )}

          {isEditing && selectedUser && (
            <div className="card border-0 shadow" style={{ borderRadius: '15px' }}>
              <div className="card-header" style={{ 
                background: 'linear-gradient(45deg, #ffc107, #fd7e14)',
                color: 'white',
                borderRadius: '15px 15px 0 0'
              }}>
                <h5 className="card-title mb-0 fw-bold">
                  Edit User Information
                </h5>
              </div>
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-md-8">
                    <div className="mb-3">
                      <label htmlFor="editName" className="form-label fw-semibold text-muted" style={{ fontSize: '0.9rem' }}>Full Name</label>
                      <input
                        type="text"
                        className="form-control shadow-sm"
                        id="editName"
                        name="name"
                        value={formData.name}
                        onChange={onInputChange}
                        placeholder="Enter full name"
                        style={{ 
                          borderRadius: '12px', 
                          border: '1px solid #e0e0e0',
                          padding: '12px 16px',
                          fontSize: '0.95rem',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#667eea'}
                        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="editUsername" className="form-label fw-semibold text-muted" style={{ fontSize: '0.9rem' }}>Username</label>
                      <input
                        type="text"
                        className="form-control shadow-sm"
                        id="editUsername"
                        name="username"
                        value={formData.username}
                        onChange={onInputChange}
                        placeholder="Enter username"
                        style={{ 
                          borderRadius: '12px', 
                          border: '1px solid #e0e0e0',
                          padding: '12px 16px',
                          fontSize: '0.95rem',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#667eea'}
                        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="editEmail" className="form-label fw-semibold text-muted" style={{ fontSize: '0.9rem' }}>Email Address</label>
                      <input
                        type="email"
                        className="form-control shadow-sm"
                        id="editEmail"
                        name="email"
                        value={formData.email}
                        onChange={onInputChange}
                        placeholder="Enter email address"
                        style={{ 
                          borderRadius: '12px', 
                          border: '1px solid #e0e0e0',
                          padding: '12px 16px',
                          fontSize: '0.95rem',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#667eea'}
                        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                      />
                    </div>
                    
                    <div className="d-flex gap-2">
                      <button 
                        className="btn btn-success fw-semibold"
                        style={{ 
                          borderRadius: '10px',
                          padding: '8px 20px',
                          transition: 'all 0.3s ease'
                        }}
                        onClick={onUpdateUser}
                        onMouseOver={(e) => e.target.style.transform = 'translateY(-1px)'}
                        onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                      >
                        Update User
                      </button>
                      <button 
                        className="btn btn-secondary fw-semibold"
                        style={{ 
                          borderRadius: '10px',
                          padding: '8px 20px',
                          transition: 'all 0.3s ease'
                        }}
                        onClick={onCancelEdit}
                        onMouseOver={(e) => e.target.style.transform = 'translateY(-1px)'}
                        onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="mb-3">
                      <div className="text-warning" style={{ fontSize: '4rem' }}>👤</div>
                    </div>
                    <p className="text-muted small fw-semibold">Editing Profile</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserManagementPage;
