"use client";

import useApi from "@/hooks/useApi";
import axiosInstance from "@/services/axiosInstance";
import socket from "@/services/socket";
import { useStore } from "@/store";
import useChannelsStore from "@/store/channels";
import useMessagesStore from "@/store/messages";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Messages() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    message: "",
  });
  const pathname = usePathname();
  const { channels, loadChannels } = useChannelsStore();

  const { messages, addMessage, loadMessages, addSingleMessage } =
    useMessagesStore();

  useEffect(() => {
    axiosInstance
      .get("/messages")
      .then((response) => {
        console.log(response.data);
        loadMessages(response.data); // Use the loadMessages action to replace existing messages
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
      <div className="flex justify-between">
        <div className="w-1/4">
          <ul>
            {channels.map((item) => (
              <li key={item.id}>
                <Link
                  className={`flex ${
                    pathname ===`/dashboard/messages/c/${item.id}` ? "bg-slate-100" : "hover:bg-slate-100"
                  } w-full space-x-2 rounded-md px-10 py-4`}
                  href={`/dashboard/messages/c/${item.id}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4">
          <h1 className="text-2xl font-black text-gray-800">
            <div className="border rounded-lg overflow-hidden m-4 shadow-lg">
              <div className="sticky top-0 z-50  border-b  border-gray-300 bg-white py-5 px-8 text-left text-sm  text-gray-800">
                <h4 className=" inline-block py-1 text-left font-sans font-semibold normal-case">
                  Ali Muhammad
                </h4>
              </div>
              <div className="flex-grow px-8 pt-8 text-left text-gray-700">
                <div className="relative mb-6 text-center">
                  <span className="relative bg-white px-2 text-sm text-gray-600">
                    28 Jan, 2024
                  </span>
                </div>
                {messages.map((item) => (
                  <div className="relative mb-6 text-left" key={item.id}>
                    <div className="text-gray-700">
                      <div className="absolute top-0 left-0">
                        <img
                          src="https://avatars.githubusercontent.com/u/49407055?v=4"
                          alt=""
                          className="float-right inline-block h-6 w-6 sm:h-12 sm:w-12 rounded-full"
                        />
                      </div>
                      <div className="relative float-left ml-8 sm:ml-16 inline-block rounded-md bg-gray-200 py-3 px-4">
                        <p className="text-sm">{item.content}</p>
                      </div>
                    </div>
                    <div className="clear-both flex text-gray-700"></div>
                  </div>
                  // <div className="relative mb-6 text-left" key={item.id}>
                  //   <div className="text-gray-700">
                  //     <div className="absolute inset-x-0 top-0">
                  //       <img
                  //         src="https://avatars.githubusercontent.com/u/49407055?v=4"
                  //         alt=""
                  //         className="float-right inline-block h-6 w-6 sm:h-12 sm:w-12 rounded-full"
                  //       />
                  //     </div>
                  //     <div className="relative float-right mr-8 sm:mr-16 inline-block rounded-md bg-blue-700 py-3 px-4 text-white">
                  //       <p className="text-sm">{item.content}</p>
                  //     </div>
                  //   </div>
                  //   <div className="clear-both flex text-gray-700"></div>
                  // </div>
                ))}

                {/* <div className="relative mb-6 text-left">
                  <div className="text-gray-700">
                    <div className="absolute inset-x-0 top-0">
                      <img
                        src="https://avatars.githubusercontent.com/u/49407055?v=4"
                        alt=""
                        className="float-right inline-block h-6 w-6 sm:h-12 sm:w-12 rounded-full"
                      />
                    </div>
                    <div className="relative float-right mr-8 sm:mr-16 inline-block rounded-md bg-blue-700 py-3 px-4 text-white">
                      <p className="text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Aliquid, dicta.
                      </p>
                    </div>
                  </div>
                  <div className="clear-both flex text-gray-700"></div>
                </div>

                <div className="relative mb-6 text-center">
                  <span className="relative bg-white px-2 text-sm text-gray-600">
                    Yesterday
                  </span>
                </div>

                <div className="relative mb-6 text-left">
                  <div className="text-gray-700">
                    <div className="absolute inset-x-0 top-0">
                      <img
                        src="https://avatars.githubusercontent.com/u/49407055?v=4"
                        alt=""
                        className="float-right inline-block h-6 w-6 sm:h-12 sm:w-12 rounded-full"
                      />
                    </div>
                    <div className="relative float-right mr-8 sm:mr-16 inline-block rounded-md bg-blue-700 py-3 px-4 text-white">
                      <p className="text-sm">
                        Option congue nihil imperdiet mazim placerat facer
                        possim.
                      </p>
                    </div>
                  </div>
                  <div className="clear-both flex text-gray-700"></div>
                </div>

                <div className="relative mb-6 text-left">
                  <div className="text-gray-700">
                    <div className="absolute top-0 left-0">
                      <img
                        src="https://avatars.githubusercontent.com/u/49407055?v=4"
                        alt=""
                        className="float-right inline-block h-6 w-6 sm:h-12 sm:w-12 rounded-full"
                      />
                    </div>
                    <div className="relative float-left ml-8 sm:ml-16 inline-block rounded-md bg-gray-200 py-3 px-4">
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non quia optio accusamus.
                      </p>
                    </div>
                  </div>
                  <div className="clear-both flex text-gray-700"></div>
                </div>

                <div className="relative mb-6 text-left">
                  <div className="text-gray-700">
                    <div className="absolute inset-x-0 top-0">
                      <img
                        src="https://avatars.githubusercontent.com/u/49407055?v=4"
                        alt=""
                        className="float-right inline-block h-6 w-6 sm:h-12 sm:w-12 rounded-full"
                      />
                    </div>
                    <div className="relative float-right mr-8 sm:mr-16 inline-block rounded-md bg-blue-700 py-3 px-4 text-white">
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                      </p>
                    </div>
                  </div>
                  <div className="clear-both flex text-gray-700"></div>
                </div>

                <div className="relative mb-6 text-left">
                  <div className="text-gray-700">
                    <div className="absolute top-0 left-0">
                      <img
                        src="https://avatars.githubusercontent.com/u/49407055?v=4"
                        alt=""
                        className="float-right inline-block h-6 w-6 sm:h-12 sm:w-12 rounded-full"
                      />
                    </div>
                    <div className="relative float-left ml-8 sm:ml-16 inline-block rounded-md bg-gray-200 py-3 px-4">
                      <div className="h-6 pt-2">
                        <span className="rounded-full float-left mx-px h-2 w-2 bg-gray-500"></span>
                        <span className="rounded-full float-left mx-px h-2 w-2 bg-gray-500"></span>
                        <span className="rounded-full float-left mx-px h-2 w-2 bg-gray-500"></span>
                      </div>
                    </div>
                  </div>
                  <div className="clear-both flex text-gray-700"></div>
                </div> */}
                <div className="mt-4  flex items-start border-t  border-gray-300 sm:p-8 py-4 text-left  text-gray-700">
                  <textarea
                    cols="1"
                    rows="1"
                    placeholder="Your Message"
                    className="mr-4 overflow-hidden w-full flex-1 cursor-text resize-none whitespace-pre-wrap rounded-md bg-white text-sm py-2 sm:py-0 font-normal text-gray-600 opacity-70 shadow-none outline-none focus:text-gray-600 focus:opacity-100"
                  ></textarea>
                  <button className="relative  inline-flex h-10 w-auto flex-initial cursor-pointer items-center justify-center self-center  rounded-md bg-blue-700 px-6 text-center align-middle text-sm font-medium text-white outline-none focus:ring-2">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </h1>
        </div>
      </div>
    );
  }
}
