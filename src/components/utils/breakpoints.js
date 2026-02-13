import { getBreakpointXl, getBreakpointMd, getBreakpointLg } from "./cssVariables";

export function isDesktopViewport() {
  const breakpointXl = getBreakpointXl();
  return window.matchMedia(`(min-width: ${breakpointXl})`).matches;
}

export function isTabletLargeViewport() {
  const breakpointLg = getBreakpointLg();
  return window.matchMedia(`(min-width: ${breakpointLg})`).matches && !isDesktopViewport();
}

export function isTabletViewport() {
  const breakpointMd = getBreakpointMd();
  return window.matchMedia(`(min-width: ${breakpointMd})`).matches && !isDesktopViewport();
}
