import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center text-on-surface">
        <div className="flex items-center gap-3 p-5 rounded-2xl bg-surface-container-low border border-cyan-400/40">
          <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-xs text-cyan-300">Verifying Mission Control Authorization...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
