import React from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

async function fetchUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}

export default async function CommunityPage() {
  const users = await fetchUsers();
  return (
    <div>
      <h1>Post Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
