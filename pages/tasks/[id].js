import { useRouter } from "next/router"

export default function Task({task}) {
    const {query} = useRouter()
    console.log(task);
    return (
        <div>
            <h1>Заявка номер {query.id}</h1>
            <ul>userId: {task.userId}</ul>
            <ul>id: {task.id}</ul>
            <ul>title: {task.title}</ul>
            <ul>completed: {task.completed}</ul>
        </div>
    )
};

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const task = await response.json()
    return {
        props: {task},
    }
}