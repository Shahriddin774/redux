import { Post} from "../interface/IF";

export async function fetchUser(): Promise<Post> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
        throw new Error('Ошибка');
    }
    return response.json();
}
