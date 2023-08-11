import React from "react";

const MyRecipes = () => {
  return (
    <>
      <div class="flex flex-wrap -m-4 min-h-[50vh] my-10 px-5">
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/720x400"
              alt="content"
            />
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Chichen Itza
            </h2>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/721x401"
              alt="content"
            />
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Colosseum Roma
            </h2>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/722x402"
              alt="content"
            />
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Great Pyramid of Giza
            </h2>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/722x402"
              alt="content"
            />
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Great Pyramid of Giza
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyRecipes;
