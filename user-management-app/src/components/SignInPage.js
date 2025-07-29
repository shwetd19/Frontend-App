import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sign In Page Component
function SignInPage({ onNavigate, onSignIn, formData, onInputChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      alert('Please fill in all fields');
      return;
    }
    onSignIn();
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="row w-100 justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="card shadow-lg border-0" style={{ borderRadius: '20px', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <div className="d-inline-block p-2 rounded-circle shadow mb-3" style={{ 
                  background: 'linear-gradient(45deg, #667eea, #764ba2)', 
                  color: 'white', 
                  fontSize: '24px', 
                  fontWeight: 'bold',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  🔐
                </div>
                <h2 className="text-primary fw-bold mb-2">Sign In</h2>
                <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>Enter your credentials to access your account</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label fw-semibold text-muted" style={{ fontSize: '0.9rem' }}>Username</label>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={onInputChange}
                    placeholder="Enter your username"
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
                  <label htmlFor="password" className="form-label fw-semibold text-muted" style={{ fontSize: '0.9rem' }}>Password</label>
                  <input
                    type="password"
                    className="form-control shadow-sm"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={onInputChange}
                    placeholder="Enter your password"
                    style={{ 
                      borderRadius: '12px', 
                      border: '1px solid #e0e0e0',
                      padding: '12px 16px',
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                  />
                </div>
                
                <div className="d-grid gap-3">
                  <button 
                    type="submit"
                    className="btn btn-primary btn-lg shadow-sm fw-semibold"
                    style={{ 
                      borderRadius: '15px',
                      padding: '12px 24px',
                      fontSize: '1rem',
                      background: 'linear-gradient(45deg, #667eea, #764ba2)',
                      border: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    Sign In
                  </button>
                  <button 
                    type="button"
                    className="btn btn-link text-decoration-none fw-semibold"
                    style={{ color: '#667eea', fontSize: '0.9rem' }}
                    onClick={() => onNavigate('welcome')}
                  >
                    ← Back to Welcome
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;