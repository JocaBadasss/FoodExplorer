import { Container } from "../styles"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
export const FavoriteDishsSkeleton = () => {
  return (
    <>
      <Skeleton
        circle
        className="skeleton-img"
      />
      <div>
        <h1>
          <Skeleton className="skeleton-title" />
        </h1>
        <button>
          <Skeleton className="skeleton-button" />
        </button>
      </div>
    </>
  )
}
