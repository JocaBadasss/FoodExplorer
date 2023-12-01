import { Container } from "../styles"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
export const MobileDishsSkeleton = () => {
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
        <span>
          <Skeleton className="skeleton-price" />
        </span>
      </div>
    </>
  )
}
