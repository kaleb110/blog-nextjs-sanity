import Link from "next/link";
import dynamic from "next/dynamic";
import Search from "./additions/Search";
import sanityQuery from "../api/sanityQuery";
const Drawer = dynamic(() => import("@/app/components/Drawer"))
const ThemeSwitch = dynamic(() => import("@/app/components/themes/ThemeSwitcher"))

const App = async () => {
  const posts = await sanityQuery()
  return (
    <div className="flex justify-between items-center py-4 px-8 relative">
      {/* Logo Section */}
      <a href="/" className="font-bold text-lg">
        JSdev
      </a>

      {/* Main Navigation for Larger Screens */}
      <div className="hidden sm:flex gap-4 text-lg">
        <Link href="/">Blogs</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/projects">Projects</Link>
        <button>log in</button>
      </div>

      <div className="flex items-center gap-2">
        {/* search button */}
        <Search posts={posts} />
        {/* Theme Switch */}
        <div className="max-sm:flex max-sm:justify-end">
          <ThemeSwitch />
        </div>

        {/* Drawer Menu for Small Screens */}
        <Drawer />
      </div>
    </div>
  );
}

export default App
