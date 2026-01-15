export default function Offline() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Você está offline</h1>
        <p className="text-zinc-400 mb-6">
          Por favor, reconecte-se à internet para continuar usando o aplicativo.
        </p>
      </div>
    </div>
  )
}
