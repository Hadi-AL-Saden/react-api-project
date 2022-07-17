import React from 'react'

function TopButtons({ setQuery }) {
    const citys =[
        {
            id:1,
        title:'Jordan'
        },
        {
            id:2,
        title:'Saudi arabia'
        },
        {
            id:3,
        title:'Egypt'
        },
        {
            id:4,
        title:'palestine'
        },
        {
            id:5,
        title:'Syria'
        },
    ]
  return (
    <div className="flex items-center justify-around my-6">
    {citys.map((city) => (
      <button
        key={city.id}
        className="text-white text-lg font-medium"
        onClick={() => setQuery({ q: city.title })}
      >
        {city.title}
      </button>
    ))}
  </div>

  );
}

export default TopButtons