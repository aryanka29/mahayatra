export default function BusHeroSlider() {
  const images = [1, 2, 3, 4, 5, 6];

  return (
    <div className="overflow-x-auto py-6 px-6">
      <div className="flex gap-6 min-w-max">
        {images.map((img) => (
          <div
            key={img}
            className="w-[320px] h-[160px] rounded-xl bg-white shadow-md flex-shrink-0 overflow-hidden"
          >
            <img
              src={`/bus-slider/${img}.jpg`}
              alt="Bus offer"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
