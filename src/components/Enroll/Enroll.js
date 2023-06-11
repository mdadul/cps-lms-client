import React, { useState } from "react";
import Layout from "../common/Layout";
import bg from "../../img/bg.jpg";
import { api } from "../../config";
import { useNavigate, useParams } from "react-router-dom";
import Auth from "../../Hooks/Auth";
import { toast } from "react-toastify";

export default function Enroll() {
  const { id } = useParams();
  const auth = Auth();
  const token = auth.token;
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [transaction, setTransaction] = useState("");

  const handleEnroll = (e) => {
    e.preventDefault();
    fetch(`${api}/enroll`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        courseId: id,
        userId: auth.user._id,
        phoneNumber: phone,
        transactionId: transaction,
        enrollmentDate: Date.now(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "Already enrolled")
          return toast.error("Already enrolled");
        else if (data.error) return toast.error(data.error);
        else {
          toast.success(data.msg);
          e.target.reset();
          navigate("/studentdashboard");
        }
      });
  };

  return (
    <Layout>
      <div className="relative">
        <img
          src={bg}
          className="absolute inset-0 h-full w-full object-cover"
          alt=""
        />
        <div className="relative bg-emerald-700 bg-opacity-70">
          <svg
            className="absolute inset-x-0 -bottom-1 text-white"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            ></path>
          </svg>
          <div className="relative mx-auto overflow-hidden px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
                <h2 className="mb-6 max-w-lg font-sans text-2xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
                  Unleash Your Inner Hero: Enroll in the Path of Greatness!
                </h2>
              </div>
              <div className="w-full max-w-xl xl:w-5/12 xl:px-8">
                <div className="overflow-hidden rounded-xl border-t-4 border-emerald-600 bg-white p-7 shadow-2xl shadow-emerald-300 sm:p-10">
                  <h3 className="mb-4 text-xl font-bold text-emerald-900 sm:mb-6 sm:text-center sm:text-2xl">
                    Enroll now
                  </h3>
                  <form onSubmit={handleEnroll}>
                    <div className="mb-1 sm:mb-2">
                      <label
                        for="phone"
                        className="mb-1 inline-block font-medium text-emerald-900"
                      >
                        Mobile Number
                      </label>
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+880 181212 2020"
                        required=""
                        type="phone"
                        className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        for="transaction"
                        className="mb-1 inline-block font-medium text-emerald-900"
                      >
                        Transaction ID
                      </label>
                      <input
                        onChange={(e) => setTransaction(e.target.value)}
                        placeholder="TNX521SD52"
                        required=""
                        type="text"
                        className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-emerald-600 px-6 font-medium tracking-wide text-white shadow-md ring-emerald-200 transition duration-200 hover:bg-emerald-700 focus:outline-none focus:ring"
                      >
                        Enroll
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
