export function DomainAuthorityDemo() {
  return (
    <div className="bg-gray-800 rounded-xl p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold text-center mb-12">
        Watch Your Domain Authority Grow
      </h3>

      <div className="flex justify-center">
        <div className="relative w-64 h-64">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl" />

          {/* Main Circle */}
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full border-8 border-gray-700" />
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="128"
                cy="128"
                r="60"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                className="text-yellow-400"
                style={{
                  strokeDasharray: 376.99,
                  strokeDashoffset: 150.8,
                }}
              />
            </svg>

            {/* Score Display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-5xl font-bold text-yellow-400">40</div>
              <div className="text-lg text-gray-400 mt-2">DA Score</div>
            </div>

            {/* Pulse Effect */}
            <div className="absolute inset-0 rounded-full border-2 border-yellow-400" />
          </div>
        </div>
      </div>

      <div className="mt-12 text-center max-w-2xl mx-auto">
        <p className="text-lg text-gray-400">
          Our customers see an average increase from{' '}
          <span className="text-gray-300">10</span>
          {' '}to{' '}
          <span className="text-yellow-400 font-semibold">40</span>
          {' '}in Domain Authority within 60 days
        </p>
      </div>
    </div>
  );
}