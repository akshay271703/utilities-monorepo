"use client";

import { useRouter } from "next/navigation";

const types = [
  {
    name: "Token Bucket",
    description:
      "Allows requests based on tokens in a bucket that refill at a fixed rate.",

    route: "token-bucket",
    content: () => (
      <section>
        <ul>
          <li> - A token bucket is a container that has pre-defined capacity.</li>
          <li> - Tokens are put in the bucket at preset rates periodically.</li>
          <li> -  Once the bucket is full, no more tokens are added</li>
          <li>
            Each request consumes one token. When a request arrives, we check if
            there are enough tokens in the bucket
          </li>
          <li>
            If there are enough tokens, we take one token out for each request,
            and the request goes through
          </li>
          <li>If there are not enough tokens, the request is dropped.</li>
        </ul>
      </section>
    ),
  },
  {
    name: "Leaking Bucket",
    description:
      "Processes requests at a fixed rate, regardless of burstiness.",
    route: "leaking-bucket",
  },
  {
    name: "Fixed Window Counter",
    description: "Limits requests within fixed time windows.",
    route: "fixed-window",
  },
  {
    name: "Sliding Window Log",
    description: "Logs timestamps of requests to dynamically calculate limits.",
    route: "sliding-log",
  },
  {
    name: "Sliding Window Counter",
    description:
      "Improves fixed window by splitting time and smoothing traffic.",
    route: "sliding-counter",
  },
];

export default function RateLimiterTypes() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
        Types of Rate Limiters
      </h1>
      <div className=" gap-6 max-w-6xl mx-auto">
        {types.map((type, index) => (
          <div
            key={type.route}
            className="bg-white rounded-xl shadow-md p-6 my-5"
          >
            <h2 className="text-xl font-semibold text-indigo-600">
              #{index + 1} {type.name}
            </h2>
            <p className="mt-2 text-gray-600">{type.description}</p>

            {type.content && type.content()}
            <button
              onClick={() => router.push(`/types/${type.route}`)}
              className="mt-4 inline-block px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
            >
              Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
