// @refresh reload
import { Suspense } from "solid-js"
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  useLocation,
} from "solid-start"
import NavList from "~/components/navigation/NavList"
import AppHeader from "./components/header/AppHeader"
import DynamicHeader from "./components/navigation/DynamicHeader"
import "./root.css"

export default function Root() {
  const location = useLocation()
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600"
  return (
    <Html lang="en">
      <AppHeader />
      <Body>
        <Suspense>
          <ErrorBoundary>
            <NavList />
            <DynamicHeader />
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
