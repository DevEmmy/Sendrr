import ConnectionModalProvider from '@/components/CreateConnection/ConnectionModalProvider';
import { MantineProvider } from '@mantine/core';
import React from 'react'

const RootLayout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <ConnectionModalProvider>
        {children}
      </ConnectionModalProvider>
    </div>
  )
}

export default RootLayout