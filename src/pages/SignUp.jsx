import { Link } from "react-router-dom";
import signup from "../img/welcome.svg";
import Layout from "../components/common/Layout";
import Input from "../components/Element/Input";
import Button from "../components/Element/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../config";
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSingup = (e)=>{
    e.preventDefault();
    fetch(`${api}/users/signup`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email,password})
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.user){
        localStorage.setItem("token", data.token);
        toast.success("Successfully sign up ", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        
        if(data.user.role === "admin"){
          window.location.href = "/admindashboard";
        } else if(data.user.role === "student"){
          window.location.href = "/studentdashboard";
        }
      }
      else{
        toast.error(data.msg, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    )

  }

  return (
    <Layout>
      <div class="flex w-screen flex-wrap text-slate-800">
        <div class="relative hidden h-screen select-none flex-col justify-center md:flex md:w-1/2">
          <img
            src={signup}
            alt="sign-up"
            class="absolute inset-0 w-4/5 object-cover mt-36 ml-20"
          />
        </div>
        <div class="flex w-full h-screen flex-col md:w-1/2 bg-gray-50">
          <div class="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
            <p class="text-center text-3xl font-bold md:text-left md:leading-tight">
              Create your free account
            </p>
            <p class="mt-6 text-center font-medium md:text-left">
              Already using PS?
              <Link
                to="/signin"
                class="whitespace-nowrap font-semibold text-blue-700"
              >
                Login here
              </Link>
            </p>

            <form class="flex flex-col items-stretch pt-3 md:pt-8" onSubmit={handleSingup}>
              <div class="flex flex-col pt-4">
                <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <Input
                    type="text"
                    placeholder="Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div class="flex flex-col pt-4">
                <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <Input
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div class="mb-4 flex flex-col pt-4">
                <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <Input
                    type="password"
                    placeholder="Password (minimum 8 characters)"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <Button type="submit" label="Sign up" />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
