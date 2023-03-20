import FeatureCard from "./FeatureCard";
import LiveClass from "../../../img/LiveClass.svg";
import record from "../../../img/Rercorded-Video-lecture.svg"
import ask from "../../../img/ask-question.svg"
import practice from "../../../img/Practice.svg"
import lecture from "../../../img/Lecture-sheet.svg"
import contest from "../../../img/Contest.svg"

export default function Features() {
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 mb-24 md:h-screen">
        <div className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row">
          <div className="text-center">
            <h2 className="bg-clip-text text-3xl font-extrabold text-gray-700 sm:text-5xl">
              Why Choose Us?
            </h2>
            <p className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
              We have everything you need to learn Programming
            </p>
          </div>
        </div>
        <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
          <FeatureCard
            img={LiveClass}
            title="Live Class"
            description="Our live class help you maintain your routine"
          />
          <FeatureCard
            img={record}
            title="Recorded Video lectures"
            description="Learn at your own pace from our recorded videos"
          />
           <FeatureCard
            img={ask}
            title="Ask Your Teacher"
            description="Get your doubts solved within our platform"
          />
          <FeatureCard
            img={practice}
            title="Practice Conterst"
            description="Instant scores, explanations and leaderboards!"
          />
          <FeatureCard
            img={lecture}
            title="Lecture sheet"
            description="Access our lecture sheets and interactive books"
          />
          <FeatureCard
            img={contest}
            title="Contest Leaderboard"
            description="See where you stand among your friends"
          />
        </div>
      </section>
    
    </>
  );
}
