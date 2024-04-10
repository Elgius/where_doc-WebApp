"use client";

function Data({ params }: { params: { name: string } }) {
  return (
    <div>
      <h1>Hello this {params.name} </h1>
    </div>
  );
}

export default Data;
