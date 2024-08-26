import Link from "next/link";
import dynamic from "next/dynamic";
import Search from "./Search";
import sanityQuery from "../api/sanityQuery";
import NavLinks from "./NavLinks";
const Drawer = dynamic(() => import("@/app/components/Drawer"))
const ThemeSwitch = dynamic(() => import("@/app/components/themes/ThemeSwitcher"))


const App = async () => {
  const posts = await sanityQuery()
  
  return (
    <div className="flex justify-between items-center py-4 px-6 sm:px-8 lg:px-32 relative">
      {/* Logo Section */}
      <Link href="/" className="font-bold text-lg">
        JSdev
      </Link>

      {/* Main Navigation for Larger Screens */}
      <NavLinks />

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
