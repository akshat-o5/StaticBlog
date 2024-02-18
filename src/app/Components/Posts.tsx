// import { getSortedPostsData } from "../../../lib/posts"
// import ListItem from "./ListItem"

// export default function Posts() {
//     const posts = getSortedPostsData()

//     return (
//         <section className="mt-6 mx-auto max-w-2xl">
//             <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
//             <ul className="w-full">
//                 {posts.map(post => (
//                     <ListItem key={post.id} post={post} />
//                 ))}
//             </ul>
//         </section>
//     )
// }/


import { getSortedPostsData } from "../../../lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
    const posts = getSortedPostsData();

    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold dark:text-white/90 my-4">Blogs:</h2>
            <div className="grid gap-4 mt-4">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white/90 p-4 rounded-md shadow-md dark:bg-slate-800"
                    >
                        <ListItem post={post} />
                    </div>
                ))}
            </div>
        </section>
    );
}
