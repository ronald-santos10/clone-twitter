import { user } from "@/data/user";
import { RecommendationItem, RecommendationItemSkeleton } from "./recommendation-item";

export const RecommendationArea = () => {
  return (
    <div className="bg-zinc-700 rounded-3xl p-6 flex flex-col gap-4 overflow-hidden">
      <h2 className="text-xl">Quem Seguir</h2>
      <div className="flex flex-col gap-4 pt-0">
        <RecommendationItem user={user}/>
        <RecommendationItemSkeleton/>
      </div>
    </div>
  );
};
