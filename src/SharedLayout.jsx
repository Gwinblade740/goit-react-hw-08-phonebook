import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { UserMenu } from '../components/UserMenu/UserMenu';
import { AuthMenu } from '../components/AuthMenu/AuthMenu';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <AuthMenu />
          <UserMenu />
        </nav>
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default SharedLayout;
