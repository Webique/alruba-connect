import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-bold text-primary mb-4">404</div>
        <h1 className="text-2xl font-bold text-foreground mb-4">صفحة غير موجودة | Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة
          <br />
          Sorry, the page you're looking for doesn't exist
        </p>
        <Button 
          onClick={() => window.location.href = '/'}
          className="btn-brand"
        >
          <Home className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
          العودة للرئيسية | Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
