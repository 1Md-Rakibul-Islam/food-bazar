import React from "react";

const Process = () => {
  return (
    <section>
      <div className="flex flex-wrap justify-between items-center gap-10 lg:mx-20 md:mx-10 mx-5 mb-20">
        <div className="max-w-2xl text-white">
          <h2 className="text-6xl font-extrabold leading-tight"> <span className="text-green-600">Coffee</span> <br /> Machines</h2>
          <p className="mt-12">
            Maecenas ut sodales dui, non vulputate nunc. Donec pulvinar arcu sed
            nisi consectetur varius. Fusce consequat dictum imperdiet. Etiam
            lacinia eu ante et bibendum.
          </p>
        </div>
        <img
          className=""
          src="https://i.ibb.co/zmxwT5f/machine.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Process;
