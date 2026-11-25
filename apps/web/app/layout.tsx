import './globals.css';
import type { ReactNode } from 'react';
export const metadata={title:'EnterpriseX ERP',description:'Integrated educational ERP dashboard'};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}
