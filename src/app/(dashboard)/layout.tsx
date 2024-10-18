export default function Layout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh bg-blue-100 dark:bg-blue-950">
      <div className="flex w-80 items-center justify-center bg-green-100 dark:bg-green-950">sidebar</div>

      <div className="flex flex-1 flex-col">
        <header className="flex h-18 items-center justify-center bg-purple-100 dark:bg-purple-950">header</header>
        <div className="mx-auto flex size-full max-w-8xl">{children}</div>
      </div>
    </div>
  );
}
