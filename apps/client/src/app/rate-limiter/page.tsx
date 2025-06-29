'use client'
import { useRouter } from "next/navigation";

export default function RateLimiter() {
const router = useRouter();
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-indigo-600">Rate Limiter</h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            A rate limiter helps control traffic flow from clients or services,
            ensuring system stability and performance.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Why Use a Rate Limiter?
          </h2>
          <ul className=" mt-4 space-y-2 text-gray-700">
            <li>
              <span className="font-medium text-indigo-500"># </span>
              Prevents resource starvation and denial-of-service (DoS) attacks.
            </li>
            <li>
              {" "}
              <span className="font-medium text-indigo-500">#</span> Reduces
              server load and associated infrastructure costs.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Key Insights</h2>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>
              <span className="font-medium text-indigo-500">#</span> Rate
              limiters can be applied based on IP address, user ID, or custom
              identifiers.
            </li>
            <li>
              <span className="font-medium text-indigo-500">#</span> Best
              implemented in gateways or backend layers to avoid client-side
              bypasses.
            </li>
            <li>
              <span className="font-medium text-indigo-500">#</span> Can be
              applied globally or at specific API endpoints.
            </li>
          </ul>
        </div>

        <div className="text-center">
          <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-md transition cursor-pointer" onClick={() => router.push('/rate-limiter/types')}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
