/* ==========================================================================
   RESET & GLOBAL STYLES
   ========================================================================== */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333333;
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ==========================================================================
   HEADER & NAVIGATION
   ========================================================================== */
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo-circle {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #333333;
}

.logo-circle img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nav-center {
  display: flex;
  gap: 1.5rem;
}

.nav-center a {
  text-decoration: none;
  color: #333333;
  font-weight: 500;
  transition: color 0.2s ease-in-out;
}

.nav-center a:hover {
  color: #e94560;
}

.brick-icon {
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
}

.brick-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* ==========================================================================
   PAGE TITLES
   ========================================================================== */
.site-title {
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0;
  color: #e94560;
}

/* ==========================================================================
   SECTION WRAPPERS
   =================================================================
