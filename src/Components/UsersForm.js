import { useEffect, useState } from "react";

const UsersForm = ({ addUser, selectedUser, updateUser, setUsersList }) => {
	useEffect(() => {
		if (selectedUser !== null) {
			setFirst_name(selectedUser.first_name);
			setLast_name(selectedUser.last_name);
			setEmail(selectedUser.email);
			setPassword(selectedUser.password);
			setBirthday(selectedUser.birthday);
		} else {
			reset();
		}
	}, [selectedUser]);

	const [first_name, setFirst_name] = useState("");
	const [last_name, setLast_name] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [birthday, setBirthday] = useState(true);

	const submit = (e) => {
		e.preventDefault();
		const user = {
			first_name,
			last_name,
			email,
			password,
			birthday
		};
		if (selectedUser) {
			updateUser(user);
		} else {
			addUser(user);
		}
		reset();
	};
	const reset = () => {
		setFirst_name("");
		setLast_name("");
		setEmail("");
		setPassword("");
		setBirthday("");
	};
	return (
		<div className="contact-form">
			<form action="" onSubmit={submit}>
				<p>
					<label htmlFor="first_name">Nombre</label>
					<input
						type="text"
						id="first_name"
						value={first_name}
						onChange={(e) => setFirst_name(e.target.value)}
					/>
				</p>
				<p>
					<label htmlFor="last_name">apellido</label>
					<input
						type="text"
						id="last_name"
						value={last_name}
						onChange={(e) => setLast_name(e.target.value)}
					/>
				</p>
				<p>
					<label htmlFor="email">email</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</p>

				<p>
					<label htmlFor="birthday">fecha de nacimiento:</label>

					<input
						type="date"
						id="birthday"
						name="trip-start"
						value={birthday}
						min="1900-01-01"
						max="2022-12-31"
						onChange={(e) => setBirthday(e.target.value)}
					/>
				</p>

				<p className="block">
					<label htmlFor="password">password</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</p>
				<p className="block">
					<button> submit</button>
				</p>
			</form>
		</div>
	);
};

export default UsersForm;

//{
// selectedUser !== null && <button onClick={() => setUsersList == null}>cancel</button>
//}
