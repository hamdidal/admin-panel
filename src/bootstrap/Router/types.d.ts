import { FC } from 'react'

export type RouteType = {
    path: string
    Page: FC
    pageType: 'public' | 'protected'
}
