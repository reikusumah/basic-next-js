import Layout from "../../components/Layout";
import styles from "../../styles/Users.module.css";
import { useRouter } from "next/router";

interface UserProps {
  dataUsers: Array<any>;
}

export default function Users(props: UserProps) {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="Users">
      <h2>Users Page</h2>
      {dataUsers.map((user) => {
        return (
          <div
            className={styles.card}
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
          >
            <p key={user.name}>
              {user.name} - {user.email}
            </p>
          </div>
        );
      })}
    </Layout>
  );
}

// halaman sudah di bundle sebelum page muncul menggunakan getStaticProps()
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
