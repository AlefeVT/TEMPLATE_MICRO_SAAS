import { PropsWithChildren } from 'react';
import { auth } from '@/services/auth';
import { ClientSideProvider, } from './_components/ClientSideProvider';
import { Sidebar } from './_components/Sidebar';

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <ClientSideProvider session={session}>
      <div className="flex h-screen  overflow-hidden">
        <div className="flex h-screen">
          <Sidebar user={session.user}/>
        </div>
        <main className='w-full h-screen'>
        {children}
          </main>
      </div>
    </ClientSideProvider>




  );
}
