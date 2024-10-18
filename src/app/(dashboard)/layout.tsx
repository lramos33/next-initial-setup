export default function Layout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh bg-blue-100 dark:bg-blue-950">
      <div className="flex w-80 items-center justify-center bg-green-100 dark:bg-green-950">sidebar</div>

      <header className="flex h-18 items-center justify-center bg-purple-100 dark:bg-purple-950">header</header>
      <div className="mx-auto flex w-full max-w-8xl flex-1 p-8">{children}</div>
    </div>
  );
}
