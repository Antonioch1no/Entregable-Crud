import axios from "axios";
import { useEffect, useState } from "react";
import UsersForm from "./Components/UsersForm";
import UsersList from "./Components/UsersList";
import "./styles.css";

export default function App() {
	const [usersList, setUsersList] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);

	useEffect(() => {
		axios
			.get("https://users-crud1.herokuapp.com/users/")
			.then((res) => setUsersList(res.data));
	}, []);

	const getUsers = () => {
		axios
			.get("https://users-crud1.herokuapp.com/users/")
			.then((res) => setUsersList(res.data));
	};

	const addUser = (newUser) => {
		axios
			.post("https://users-crud1.herokuapp.com/users/", newUser)
			.then(() => getUsers());
	};
	const deleteUser = (id) => {
		axios
			.delete(`https://users-crud1.herokuapp.com/users/${id}`)
			.then(() => getUsers());
	};
	const selectUser = (user) => {
		setSelectedUser(user);
	};
	const updateUser = (editedUser) => {
		axios
			.put(
				`https://users-crud1.herokuapp.com/users/${selectedUser.id}/`,
				editedUser
			)
			.then(() => getUsers());
		setSelectedUser(null);
	};

	return (
		<div className="app">
			<div className="content">
				<div className="contact-wrapper">
					<UsersForm
						addUser={addUser}
						selectedUser={selectedUser}
						updateUser={updateUser}
						setUsersList={setUsersList}
					/>
					<UsersList
						usersList={usersList}
						deleteUser={deleteUser}
						selectUser={selectUser}
					/>
				</div>
			</div>
		</div>
	);
}
