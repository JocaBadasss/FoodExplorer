import { Container, IncludeContainer } from "../styles"

import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export const DishDetailsSkeleton = ({ data }) => {
  return (
    <div className="content">
      <Skeleton
        circle
        className="skeleton-image"
      />

      <div className="wrapper">
        <div className="details">
          <h1>
            <Skeleton className="skeleton-title" />
          </h1>
          <p>
            <Skeleton
              count={2}
              className="skeleton-description"
            />
          </p>
          <div>
            {data.tags &&
              data.tags.map((tag) => (
                <Skeleton
                  className="skeleton-tag"
                  key={tag.id}
                />
              ))}
          </div>
        </div>
        <IncludeContainer>
          <div>
            <Skeleton className="skeleton-input" />
          </div>

          <button className="skeleton-button-wrapper">
            <Skeleton className="skeleton-button" />
          </button>
        </IncludeContainer>
      </div>
    </div>
  )
}
