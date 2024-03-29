"use client";
import useApi from "@/hooks/useApi";
import axiosInstance from "@/services/axiosInstance";
import socket from "@/services/socket";
import { useStore } from "@/store";
import useChannelsStore from "@/store/channels";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Channels() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    message: "",
  });
  const { channels, loadChannels } = useChannelsStore();

  useEffect(() => {
    axiosInstance
      .get("/channels")
      .then((response) => {
        console.log(response.data);
        loadChannels(response.data);
      })
      .catch((err) => {
        setError({ message: err.message });
      })
      .finally(() => {
        setLoading(false);
      });
    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });
    return () => {};
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error && error.message) {
    return <p>Error: {error.message}</p>;
  } else {
    return (
      <div className="pb-20">
        <div className="mt-4 grid gap-2 px-2 sm:px-20 md:max-w-screen-xl md:px-10 xl:gap-4">
          <button className="flex items-center justify-center gap-1 rounded-lg border border-emerald-500 px-4 py-2 font-medium text-emerald-500 focus:outline-none focus:ring hover:bg-emerald-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>

            <span>Create Channel</span>
          </button>
        </div>
        <section className="flex flex-col bg-white">
          <div className="mt-4 grid grid-cols-1 gap-2 px-2 sm:px-20 md:max-w-screen-xl md:grid-cols-1 md:px-10 lg:grid-cols-2 xl:grid-cols-3 xl:gap-4">
            {channels.map((item) => (
              <div
                className="rounded-xl border bg-white px-4 shadow-md"
                key={item.id}
              >
                <div className="mb-2 flex flex-col gap-y-6 border-b py-8 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-14 w-14 rounded-full object-cover"
                      src="https://avatars.githubusercontent.com/u/49407055?v=4"
                      alt="Simon Lewis"
                    />
                    <div className="ml-4 w-56">
                      <p className="text-slate-800 text-xl font-extrabold">
                        {item.name}
                      </p>
                      <p className="text-slate-500">{item.location}</p>
                    </div>
                  </div>
                </div>
                <div className="mb-2 flex justify-between border-b py-8 text-sm sm:text-base">
                  <div className="flex flex-col items-center">
                    <p className="text-slate-700 mb-1 text-xl font-extrabold">
                      14
                    </p>
                    <p className="text-slate-500 text-sm font-medium">Posts</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-slate-700 mb-1 text-xl font-extrabold">
                      {item.memberCount}
                    </p>
                    <p className="text-slate-500 text-sm font-medium">
                      Members
                    </p>
                  </div>
                </div>
                <div className="flex justify-between py-8">
                  <Link
                    href={`/dashboard/channels/${item.id}`}
                    className="text-slate-500 hover:bg-slate-100 rounded-lg border-2 px-4 py-2 font-medium focus:outline-none focus:ring"
                  >
                    Details
                  </Link>
                  <button className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}
