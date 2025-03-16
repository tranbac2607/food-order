import type { ChildrenProps } from '@/types';

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <div style={{ height: '100vh' }} className="flex flex-col  p-8">
      {children}
    </div>
  );
}
