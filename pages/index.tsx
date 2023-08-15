import { NextPage } from "next";
import React from "react";
import Carousel from "components/cards/Carousel";
import { useAuth } from "context/AuthContext";
import EmptyCard from "components/cards/EmptyCard";
import NewCourses from "components/cards/NewCourses";
import NewSongsSheet from "components/cards/NewSongsSheet";
import WelcomeCards from "components/cards/WelcomeCards";
const HomePage: NextPage = () => {
  const { isDarkMode } = useAuth();
  return (
    <div className={(isDarkMode) ? " bg-black-shadeTwo text-white" : " bg-white text-black-shadeTwo"}>
      <div className="container h-auto p-6">
        <div className="flex flex-col  ">
          <div className="flex my-2">
            <img className="w-9 mr-3" src="/icons/happy.svg" alt="happy" />
            <p className="text-xl   font-semibold">
              Welcome, Samuel!
            </p>
          </div>
          <p className="text-base  ">
            Take your first steps towards building successful learning habits.
          </p>
        </div>

        <section className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" >
            <WelcomeCards />
          </div>
        </section>

        {/* Card */}
        <section>
          <div className="center text-center m-auto p-auto flex justify-center items-center">
            <div className="md:flex  gap-4">
              <div className="flex my-2 bg-black-shadeOne px-14 rounded-3xl py-2 ">
                <img className="w-5 mr-3" src="/icons/happy.svg" alt="happy" />
                <p className="text-base text-white">
                  Invite a friend
                </p>
              </div>
              <div className="flex my-2 bg-black-shadeOne px-14 rounded-3xl py-2 ">
                <img className="w-5 mr-3" src="/icons/request.svg" alt="happy" />
                <p className="text-base text-white">
                  Request a feature
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Card */}
        <section className="my-10">
          <div className="center text-center m-auto p-auto flex justify-center items-center">
            <div className="flex gap-4">
              <Carousel />
            </div>
          </div>
        </section>


        {/* Card */}
        <section className="my-10">
          <div className="flex justify-between py-8">
            <h3 className="text-xl font-semibold text-white">
              Continue learning
            </h3>
            <a href="" onClick={() => alert("To View All")}>
              <h3 className="text-md text-blue-900">
              </h3>
            </a>
          </div>
          <EmptyCard
            title="You don’t have any active courses"
            description="Browse courses to start learning."
          />
        </section>

        {/* Card */}
        <section >
          <div className="flex justify-between py-8">
            <h3 className="text-xl font-semibold text-white">
              New Courses
            </h3>
            <a href="" onClick={() => alert("To View All")}>
              <h3 className="text-md text-blue-900">
                View All
              </h3>
            </a>
          </div>
          <NewCourses />
        </section>
        {/* Card */}

        <section className="my-10">
          <div className="flex justify-between py-8">
            <h3 className="text-xl font-semibold text-white">
              New Song Sheet
            </h3>
            <a href="" onClick={() => alert("To View All")}>
              <h3 className="text-md text-blue-900">
                View All
              </h3>
            </a>
          </div>
          <NewSongsSheet />
        </section>

        {/* Card */}
        <section className="my-10">
          <div className="flex justify-between py-8">
            <h3 className="text-xl font-semibold text-white">
              My List
            </h3>
            <a href="" onClick={() => alert("To View All")}>
              <h3 className="text-md text-blue-900">
              </h3>
            </a>
          </div>
          <EmptyCard
            title="You haven't added any lessons yet"
            description="Browse courses to start learning."
          />
        </section>

      </div>
    </div>
  );
};

export default HomePage;
