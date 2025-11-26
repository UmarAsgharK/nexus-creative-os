const ScrollProgress = ({ progress }: { progress: number }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-navy-100 z-50">
      <div
        className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ScrollProgress

