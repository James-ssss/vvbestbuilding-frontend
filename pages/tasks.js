import MainContainer from "@/components/MainContainer";
import Link from "next/link";

const Tasks = ({tasks}) => {

    return (
        <MainContainer>
            <h1>Список заявок</h1>
            <ul>
                {tasks.map(task =>
                    <li key={task.id}>
                        <Link href={`/tasks/${task.id}`}>
                            {task.title}
                        </Link>
                    </li>
                )}
            </ul>


        </MainContainer>
    )
}

export default Tasks;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const tasks = await response.json()
    return {
        props: {tasks},
    }
}