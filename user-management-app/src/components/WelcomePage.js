import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Welcome Page Component
function WelcomePage({ onNavigate }) {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="row w-100 justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="card shadow-lg border-0" style={{ borderRadius: '20px', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
            <div className="card-body text-center p-4">
              <div className="mb-4">
                <div className="d-inline-block p-3 rounded-circle shadow" style={{ 
                  background: 'linear-gradient(45deg, #667eea, #764ba2)', 
                  color: 'white', 
                  fontSize: '28px', 
                  fontWeight: 'bold',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  👥
                </div>
              </div>
              <h1 className="card-title mb-3 text-primary fw-bold" style={{ fontSize: '2rem' }}>User Management</h1>
              <p className="card-text mb-4 text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                Manage your users efficiently with our comprehensive dashboard. Sign in to access your account or create a new one to get started.
              </p>
              <div className="d-grid gap-3">
                <button 
                  className="btn btn-primary btn-lg shadow-sm fw-semibold"
                  style={{ 
                    borderRadius: '15px', 
                    padding: '12px 24px',
                    fontSize: '1rem',
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    border: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => onNavigate('signin')}
                  onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  Sign In
                </button>
                <button 
                  className="btn btn-outline-primary btn-lg fw-semibold"
                  style={{ 
                    borderRadius: '15px', 
                    padding: '12px 24px',
                    fontSize: '1rem',
                    borderColor: '#667eea',
                    color: '#667eea',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => onNavigate('signup')}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#667eea';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#667eea';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Create New Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;