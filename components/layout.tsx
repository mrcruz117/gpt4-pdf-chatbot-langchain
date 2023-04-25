import Image from 'next/image';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="h-16 border-b border-b-slate-200 py-3">
          <nav
            className="ml-4 "
            //  pl-6"
          >
            <Image
              alt="logo"
              width="60"
              height="60"
              style={{ borderRadius: '10%', marginBottom: '10px' }}
              src="https://info.aersale.com/hubfs/Media%20Library/AerSale_Logo_3C.png?hsLang=es"
            />
          </nav>
        </div>
      </header>
      <div className="container">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>

      {/*
     This was in the most nested Header child
     <a href="#" className="hover:text-slate-600 cursor-pointer">
     Home
    </a> */}
    </div>
  );
}
