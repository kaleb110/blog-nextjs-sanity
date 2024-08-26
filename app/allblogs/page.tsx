import PostList from "../components/PostList";
import sanityQuery from "../api/sanityQuery";
const HomePage = async () => {
  const filteredPosts = await sanityQuery();
  return (
    <div className="sm:px-8 lg:px-32 px-6 pt-4 pb-8 dark:bg-gray-800 min-h-screen">
      <div className="flex flex-col w-full">
        <div className="pb-4 py-3 max-sm:px-3">
          <h1 className="text-2xl text-center">All blogs</h1>
        </div>
        <PostList posts={filteredPosts} />
      </div>
    </div>
  );
};

export default HomePage;
