import { sort } from 'fast-sort';
import Link from "next/link";

interface Users{
    id: number;
    name: string;
    email: string;
}

interface Props{
    sort_user: string;
}

const UserTable = async ({sort_user}: Props) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: Users[] = await res.json();
    const sorted_users = sort(users).asc((sort_user === "email" ? (user) => user.email : (user) => user.name ))

    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th><Link href="/users?sort_user=name">Name</Link></th>
                        <th><Link href="/users?sort_user=email">Email</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {sorted_users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default UserTable