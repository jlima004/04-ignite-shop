import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import {
  SkeletonProductContainer,
  SkeletonImageContainer,
  SkeletonProjectDetails,
} from './styles'

export function ProductSkeleton() {
  return (
    <SkeletonTheme baseColor="#202024" highlightColor="#444">
      <SkeletonProductContainer>
        <SkeletonImageContainer>
          <Skeleton width={520} height={480} />
        </SkeletonImageContainer>

        <SkeletonProjectDetails className="projectDetails">
          <Skeleton className="h1" />

          <Skeleton className="span" />

          <p>
            <Skeleton count={4} />
          </p>

          <Skeleton className="button" />
        </SkeletonProjectDetails>
      </SkeletonProductContainer>
    </SkeletonTheme>
  )
}

/* <p>
  <Skeleton count={3} />
</p> */
