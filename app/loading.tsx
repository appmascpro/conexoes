export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 border-2 border-white border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-zinc-400">Carregando...</p>
      </div>
    </div>
  )
}
