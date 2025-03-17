import type { ChildrenProps } from '@/types';

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <div style={{ height: '100vh' }} className="flex flex-col py-8 px-2">
      {children}
    </div>
  );
}
