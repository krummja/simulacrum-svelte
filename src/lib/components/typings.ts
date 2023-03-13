export type URLInfo = {
  hash: string
  host: string
  hostname: string
  href: string
  origin: string
  password: string
  pathname: string
  port: string
  protocol: string
  search: string
  searchParams: URLSearchParams
  username: string
}

export type RouteData = {
  error: any
  params: any
  routeId: any
  status: any
  url: URLInfo
  data: any
}
