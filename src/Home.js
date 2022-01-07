import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

    // const [name, setName] = useState('Pelumi');

    return (
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* <button onClick={() => setName('Farmo')}>Change name</button> */}
            {/* <p>{name}</p> */}
        </div>
    );
}

export default Home;