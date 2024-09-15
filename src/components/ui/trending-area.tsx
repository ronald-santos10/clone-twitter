import { TrendingItem, TrendingItemSekeleton } from "./trending-item";

export const TrendingArea = () => {
  return (
    <div className="bg-zinc-700 rounded-3xl p-6 flex flex-col gap-4 overflow-hidden">
      <h2 className="text-xl">O que está acontacendo?</h2>
      <div className="flex flex-col gap-4 pt-0">
        <TrendingItem label="Programação em React" count={210}/>
        <TrendingItemSekeleton/>
        <TrendingItemSekeleton/>
      </div>
    </div>
  );
};
