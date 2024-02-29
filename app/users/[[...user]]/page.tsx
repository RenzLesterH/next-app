import React, { Suspense } from 'react';
import UserTable from './user_table';
import Link from 'next/link';

interface Users{
  id: number;
  name: string;
  email: string;
}

interface Props{
  params: {
      user: string;
  };
  searchParams: {
    sort_user: string;
  };
}

const UserPage = async ({params: {user}, searchParams: {sort_user} }: Props) => {

    return (
      <React.Fragment>
          <h1>UserPage</h1>
          <Link href="/users/new" className="btn">New User</Link>
          <Suspense fallback={<p>Loading...</p>}>
              <UserTable sort_user={sort_user}/>
          </Suspense>
      </React.Fragment>
    );
}

export default UserPage