"use client";

function Data({ params }: { params: { name: string } }) {
  let callerId = params.name;
  console.log(callerId);
  return (
    <div className="h-screen w-screen flex justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-y-auto overflow-x-hidden">
      <div className=" p-2 max-w-7xl  mx-auto relative z-10  w-full pt-12 md:pt-20">
        <div>{callerId}</div>
      </div>
    </div>
  );
}

export default Data;

// this works
